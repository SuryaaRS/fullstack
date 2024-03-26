package com.java.jobapplication.model;
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
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="applicant")
public class applicant {
     @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String applicantid;
    private String applicantName;
    private String jobTitle;
    private String status;

}
