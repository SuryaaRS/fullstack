package com.java.jobapplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.payment;

@Service
public interface paymentService {
    List<payment> getAllPayments();
    Optional<payment> getpaymentById(String paymentId);
    payment  createpayment(payment payments);
    Optional<payment> updatepayment(String  paymentId,payment payments);
    void deletepayment(String paymentId);



}
