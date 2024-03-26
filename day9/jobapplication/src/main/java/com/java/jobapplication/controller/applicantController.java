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

import com.java.jobapplication.model.applicant;
import com.java.jobapplication.service.ApplicantService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/jobapplication/api/v1/applicants")
public class applicantController {
    
    
        private final ApplicantService applicantService;

     @GetMapping("/getapplicant")
    public ResponseEntity<List<applicant>> getAllapplicant(){
        List<applicant> plans = applicantService.getAllapplicant();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{applicantId}")
    public ResponseEntity<applicant> getapplicantById(@PathVariable String applicantId){

        Optional<applicant> applicants = applicantService.getapplicantById(applicantId);
        return applicants.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/newapplicant")
    public ResponseEntity<applicant> createapplicant(@RequestBody applicant applicants){
        applicant createapplicants= applicantService.createapplicant(applicants);
        return ResponseEntity.status(HttpStatus.CREATED).body(createapplicants);
    }

    @DeleteMapping("/{applicantId}")
    public ResponseEntity<String> deleteapplicant(@PathVariable String applicantId){
        applicantService.deleteapplicant(applicantId);
        return ResponseEntity.ok("Applicant deleted successfully");
    }

    @PutMapping("/{applicantId}")
    public ResponseEntity<applicant> updateapplicant(@PathVariable String applicantId, @RequestBody applicant applicants){
        var updatedapplicant = applicantService.updateapplicant(applicantId, applicants);
        return updatedapplicant.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
