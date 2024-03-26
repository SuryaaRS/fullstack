package com.java.jobapplication.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.jobsApplied;
import com.java.jobapplication.model.payment;
import com.java.jobapplication.repository.PaymentRepository;
import com.java.jobapplication.service.paymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class paymentServiceImpl implements paymentService {
    
    private final PaymentRepository paymentrepo;

    @Override
    public List<payment> getAllPayments() {
        return paymentrepo.findAll();
    }

    @Override
    public Optional<payment> getpaymentById(String paymentId) {
        return paymentrepo.findById(paymentId);
    }

    @Override
    public payment createpayment(payment payments) {
       return paymentrepo.save(payments);
    }

    @Override
    public Optional<payment> updatepayment(String paymentId, payment updatedpayments) {
        Optional<payment> exist = paymentrepo.findById(paymentId);
        if(exist.isPresent()){
            updatedpayments.setId(paymentId);
            return Optional.of(paymentrepo.save(updatedpayments));
        }
        return Optional.empty();
    }

    @Override
    public void deletepayment(String paymentId) {
         paymentrepo.deleteById(paymentId);
    }
    
}
