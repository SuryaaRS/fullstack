package com.java.jobapplication.utils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.java.jobapplication.model.user;
import com.java.jobapplication.repository.UserRepository;

import org.springframework.security.core.userdetails.UserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@SuppressWarnings("deprecation")
@Service
@RequiredArgsConstructor
public class Jwtutils {
    
    @Value("${application.jwt.secret-key}")
    private String secret;
    @Value("${application.jwt.expiry-date}")
    private long expiration;

    private final UserRepository userRepository;

    
    public String extractEmail(String token){
        return extractClaims(token, Claims::getIssuer);
    }

    private <T> T extractClaims(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private SecretKey key() {
        return Keys.hmacShaKeyFor(secret.getBytes()); 
   }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
            .verifyWith(key())
            .build()
            .parseSignedClaims(token)
            .getPayload();
    }

    public String generateToken(UserDetails userDetails) {
        user user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        return createToken(new HashMap<>(), user);
    }

    private String createToken(Map<String, Object> claims, user user) {
        Long time = System.currentTimeMillis();

        return Jwts.builder()
                .claims(claims)
                .issuer(user.getUsername())
                .issuedAt(new Date(time))
                .expiration(new Date(time + expiration))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String email = extractEmail(token);
        return email.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private Date extractExpiration(String token) {
        return extractClaims(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
}
