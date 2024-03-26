package com.java.jobapplication.service;

import org.springframework.stereotype.Service;

import com.java.jobapplication.model.job;

import java.util.List;
import java.util.Optional;


@Service
public interface jobService {
    List<job> getAlljobs();
    Optional<job> getjobsById(String jobId);
    job createjobs(job jobs);
    Optional<job> updatejobs(String jobId, job jobs);
    void deletejobs(String jobId);

}
