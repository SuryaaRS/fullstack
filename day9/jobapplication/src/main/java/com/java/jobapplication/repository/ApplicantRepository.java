package com.java.jobapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.jobapplication.model.applicant;

@Repository
public interface ApplicantRepository extends JpaRepository<applicant,String>{
    
}
