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
import com.java.jobapplication.model.jobsApplied;
import com.java.jobapplication.service.jobsAppliedService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("jobapplication/api/v1/jobsapplied")

public class jobappliedcontroller {
      

    private final jobsAppliedService jobAppliedService;

     @GetMapping()
    public ResponseEntity<List<jobsApplied>> getAlljobsapplied(){
        List<jobsApplied> plans = jobAppliedService.getAlljobsapplied();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{jobAppliedId}")
    public ResponseEntity<jobsApplied> getjobappliedById(@PathVariable String jobAppliedId){

        Optional<jobsApplied> jobapplied = jobAppliedService.getjobappliedById(jobAppliedId);
        return jobapplied.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/newjobapplied")
    public ResponseEntity<jobsApplied> createjobsapplied(@RequestBody jobsApplied jobapplied){
        jobsApplied createjobapplied = jobAppliedService.createjobsapplied(jobapplied);
        return ResponseEntity.status(HttpStatus.CREATED).body(createjobapplied);
    }

    @DeleteMapping("/{jobAppliedId}")
    public ResponseEntity<String> deletejobsapplied(@PathVariable String jobAppliedId){
        jobAppliedService.deletejobsapplied(jobAppliedId);
        return ResponseEntity.ok("jobApplied deleted successfully");
    }

    @PutMapping("/{jobAppliedId}")
    public ResponseEntity<jobsApplied> updatejobsapplied(@PathVariable String jobAppliedId, @RequestBody jobsApplied jobapplied){
        var updatedjobapplied = jobAppliedService.updatejobsapplied(jobAppliedId, jobapplied);
        return updatedjobapplied.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
