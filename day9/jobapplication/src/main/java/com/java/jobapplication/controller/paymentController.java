package com.java.jobapplication.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.java.jobapplication.model.payment;
import com.java.jobapplication.service.paymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("jobapplication/api/v1/payment")
public class paymentController {

    private final paymentService payservice;

    @GetMapping("/getpay")
    public ResponseEntity<List<payment>> getAllPayments()
    {
        List<payment> pay=payservice.getAllPayments();
        return ResponseEntity.ok(pay);
    }
    @GetMapping("/{paymentId}")
    public ResponseEntity<payment> getpaymentById(@PathVariable String paymentId){

        Optional<payment> payments = payservice.getpaymentById(paymentId);
        return payments.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
     @PostMapping("/newpayment")
    public ResponseEntity<payment> createpayment(@RequestBody payment payments){
        payment createpayments = payservice.createpayment(payments);
        return ResponseEntity.status(HttpStatus.CREATED).body(createpayments);
    }

     @DeleteMapping("/{paymentId}")
    public ResponseEntity<String> deletepayment(@PathVariable String paymentId){
        payservice.deletepayment(paymentId);
        return ResponseEntity.ok("Payment deleted successfully");
    }

    @PutMapping("/{paymentId}")
    public ResponseEntity<payment> updatepayment(@PathVariable String paymentId, @RequestBody payment payments){
        var updatedpayment = payservice.updatepayment(paymentId, payments);
        return  updatedpayment.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
}
