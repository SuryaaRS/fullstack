package com.java.jobapplication.model;

import java.util.Date;

import org.springframework.boot.autoconfigure.batch.BatchProperties.Job;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="jobs_applied")
public class jobsApplied {
     @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;
    private Date appliedDate;
    @ManyToOne
    @JoinColumn(name = "applicantid")
    private applicant applicant;

    @ManyToOne
    @JoinColumn(name="jobId")
    private job jobs;
    // @ManyToOne
    // private job job;


    
}
