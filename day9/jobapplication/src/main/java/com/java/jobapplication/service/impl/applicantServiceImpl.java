package com.java.jobapplication.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.applicant;
import com.java.jobapplication.repository.ApplicantRepository;
import com.java.jobapplication.service.ApplicantService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class applicantServiceImpl implements ApplicantService {

     private final ApplicantRepository applicantRepository;
    @Override
    public List<applicant> getAllapplicant() {
        return applicantRepository.findAll();
    }

    @Override
    public Optional<applicant> getapplicantById(String applicantId) {
        return applicantRepository.findById(applicantId);
    }

    @Override
     public applicant createapplicant(applicant applicants) {
        return applicantRepository.save(applicants);

    }

    @Override
    public Optional<applicant> updateapplicant(String applicantId, applicant updatedapplicant) {
        Optional<applicant> exist = applicantRepository.findById(applicantId);
        if(exist.isPresent()){
            updatedapplicant.setApplicantid(applicantId);
            return Optional.of(applicantRepository.save(updatedapplicant));
        }
        return Optional.empty();
    }

    @Override
    public void deleteapplicant(String applicantId) {
        applicantRepository.deleteById(applicantId);
    }
    
}
