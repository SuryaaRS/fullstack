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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="payment")
public class payment {
    
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String id;
    private String status;
    private Double totalAmount; 
    private Date paymentDate;
    private String modeOfPayment;
    

   
}
