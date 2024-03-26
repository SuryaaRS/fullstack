package com.java.jobapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.jobapplication.model.job;

@Repository
public interface JobRepository extends JpaRepository<job,String> {
    
}
