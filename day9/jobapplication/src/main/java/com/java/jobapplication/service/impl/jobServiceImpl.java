package com.java.jobapplication.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.job;
import com.java.jobapplication.repository.JobRepository;
import com.java.jobapplication.service.jobService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class jobServiceImpl implements jobService{
    private final JobRepository jobRepository;

    @Override
    public List<job> getAlljobs() {
        return jobRepository.findAll();

    }

    @Override
    public Optional<job> getjobsById(String jobId) {
        return jobRepository.findById(jobId);
    }

    @Override
    public job createjobs(job jobs) {
        return jobRepository.save(jobs);

    }

    @Override
    public Optional<job> updatejobs(String jobId, job updatejob) {
          Optional<job> exist = jobRepository.findById(jobId);
        if(exist.isPresent()){
            updatejob.setJobId(jobId);
            return Optional.of(jobRepository.save(updatejob));
        }
        return Optional.empty();

    }

    @Override
    public void deletejobs(String jobId) {
        jobRepository.deleteById(jobId);

    }
   



}
