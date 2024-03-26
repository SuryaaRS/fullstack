package com.java.jobapplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.applicant;

@Service
public interface ApplicantService {
     List<applicant> getAllapplicant();
    Optional<applicant> getapplicantById(String applicantId);
    applicant createapplicant(applicant applicants);
    Optional<applicant> updateapplicant(String applicantId, applicant applicants);
    void deleteapplicant(String applicantId);
}
