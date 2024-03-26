package com.java.jobapplication.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.jobapplication.model.user;
import com.java.jobapplication.dto.Request.ForgotPasswordRequest;
import com.java.jobapplication.dto.Request.LoginRequest;
import com.java.jobapplication.dto.Request.RegisterRequest;
import com.java.jobapplication.dto.Response.BasicsResponse;
import com.java.jobapplication.dto.Response.loginResponse;
import com.java.jobapplication.model.Token;
import com.java.jobapplication.repository.TokenRepository;
import com.java.jobapplication.repository.UserRepository;
import com.java.jobapplication.service.AuthenticationService;
import com.java.jobapplication.utils.Jwtutils;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final Jwtutils jwtUtils;
    private final TokenRepository tokenRepository;

    @SuppressWarnings("null")
    @Override
    public BasicsResponse<String> register(RegisterRequest registerRequest) {
        Optional<user> isUserExists = userRepository.findByEmail(registerRequest.getEmail());

        if (isUserExists.isPresent()) {
            return BasicsResponse.<String>builder().message("User already exists with email id"+registerRequest.getEmail())
            .data("").build();
        }

        var User = user.builder()
                   .email(registerRequest.getEmail())
                   .password(passwordEncoder
                   .encode(registerRequest.getPassword()))
                   .username(registerRequest.getName())
                   .build();

        userRepository.save(User);
        return BasicsResponse.<String>builder().message("User Registered Successfully").data("").build();           
    }

    @Override
    public BasicsResponse<loginResponse> login(LoginRequest loginRequest) {
       authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
       var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
       Map<String, Object> claims = new HashMap<>();
       claims.put("role", user.getRole().toString());
       var accessToken = jwtUtils.generateToken(user);
       revokeAllUserToken(user);
       saveUserToken(accessToken, user);
       return BasicsResponse.<loginResponse>builder()
                           .message("User logged in successfully")
                           .data(loginResponse.builder()
                            .message("User logged in successfully")
                            .accessToken(accessToken).build()
                            )
                           .build();
    }

    @SuppressWarnings("null")
    private void saveUserToken(String accessToken, user user){
        var token = Token.builder().token(accessToken).user(user).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserToken(user User){
        var validUserTokens = tokenRepository.findAllByUser_IdAndRevokedFalseAndExpiredFalse(User.getId());
        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public BasicsResponse<String> forgotPassword(ForgotPasswordRequest forgetPasswordRequest) {
       var user = userRepository.findByEmail(forgetPasswordRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
       if(!passwordEncoder.matches(forgetPasswordRequest.getCurrentPassword(), user.getPassword())){
        return BasicsResponse.<String>builder().message("Wrong password").data("").build();
       }
       if(!forgetPasswordRequest.getNewPassword().equals(forgetPasswordRequest.getConfirmPassword())){
        return BasicsResponse.<String>builder().message("Password Mismatch").data("").build();
       }
       user.setPassword(passwordEncoder.encode(forgetPasswordRequest.getNewPassword()));
       userRepository.save(user);
       return BasicsResponse.<String>builder().message("Password Updated successfully.").data("").build();
    }


}

