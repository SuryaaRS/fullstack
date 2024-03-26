package com.java.jobapplication.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.jobapplication.model.job;
import com.java.jobapplication.service.jobService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("jobapplication/api/v1/jobs")

public class jobController {
    

    private final jobService jobservice;

     @GetMapping
    public ResponseEntity<List<job>> getAlljobs(){
        List<job> plans = jobservice.getAlljobs();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{jobId}")
    public ResponseEntity<job> getjobsById(@PathVariable String jobId){

        Optional<job> jobs = jobservice.getjobsById(jobId);
        return jobs.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping()
    public ResponseEntity<job> createjobs(@RequestBody job jobs){
        job createjob = jobservice.createjobs(jobs);
        return ResponseEntity.status(HttpStatus.CREATED).body(createjob);
    }

    @DeleteMapping("/{jobId}")
    public ResponseEntity<String> deletejobs(@PathVariable String jobId){
        jobservice.deletejobs(jobId);
        return ResponseEntity.ok("Job deleted successfully");
    }

    @PutMapping("/{jobId}")
    public ResponseEntity<job> updatejobs(@PathVariable String jobId, @RequestBody job jobs){
        var updatedjobs = jobservice.updatejobs(jobId, jobs);
        return updatedjobs.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
