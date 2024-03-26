package com.java.jobapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.jobapplication.model.jobsApplied;

public interface JobsAppliedRepository extends JpaRepository<jobsApplied,String> {
    
}
