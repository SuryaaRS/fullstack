package com.java.jobapplication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.java.jobapplication.model.user;

public interface UserRepository  extends JpaRepository<user,String>{
    Optional<user> findByEmail(String email);
}
