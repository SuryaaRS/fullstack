package com.java.jobapplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.java.jobapplication.model.jobsApplied;

@Service
public interface jobsAppliedService {
    List<jobsApplied> getAlljobsapplied();
    Optional<jobsApplied> getjobappliedById(String jobappliedId);
    jobsApplied createjobsapplied(jobsApplied jobapplied);
    Optional<jobsApplied> updatejobsapplied(String jobappliedId, jobsApplied jobapplied);
    void deletejobsapplied(String jobappliedId);
}
