package com.java.jobapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.jobapplication.model.payment;

public interface PaymentRepository extends JpaRepository<payment,String> {

    
}
