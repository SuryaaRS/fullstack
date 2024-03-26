package com.java.jobapplication.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.jobsApplied;
import com.java.jobapplication.repository.JobsAppliedRepository;
import com.java.jobapplication.service.jobsAppliedService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class jobsAppliedServiceImpl implements jobsAppliedService {

    private final JobsAppliedRepository jobappliedRepository;
    @Override
    public List<jobsApplied> getAlljobsapplied() {
        return jobappliedRepository.findAll();

    }

    @Override
    public Optional<jobsApplied> getjobappliedById(String jobappliedId) {
        return jobappliedRepository.findById(jobappliedId);
    }

    @Override
    public jobsApplied createjobsapplied(jobsApplied jobapplied) {
        return jobappliedRepository.save(jobapplied);

    }

    @Override
    public Optional<jobsApplied> updatejobsapplied(String jobappliedId, jobsApplied updatejobapplied) {
        Optional<jobsApplied> exist = jobappliedRepository.findById(jobappliedId);
        if(exist.isPresent()){
            updatejobapplied.setId(jobappliedId);
            return Optional.of(jobappliedRepository.save(updatejobapplied));
        }
        return Optional.empty();
    }

    @Override
    public void deletejobsapplied(String jobappliedId) {
        jobappliedRepository.deleteById(jobappliedId);

    }
    
}
