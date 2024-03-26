package com.java.jobapplication.model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name="job")
public class job {

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String jobId;
    private String title;
    private String dept;
    private String location;
    private String qualification;
    private Date deadline;
    private String category;
 
   
}
