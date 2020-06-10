package com.example.demo.Controller;

import com.example.demo.Model.WorkExperience;
import com.example.demo.Repository.WorkExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = {("*")})
@RestController
public class WorkExperienceRestController {
    @Autowired
    private WorkExperienceRepository workExperienceRepository;

    @GetMapping("/workExperiences")
    public List<WorkExperience> workExperience() {
        return (List<WorkExperience>) workExperienceRepository.findAll();
    }

    @GetMapping("/workExperiences/{id}")
    public Optional<WorkExperience> workExperiences(@PathVariable Long id) {
        return workExperienceRepository.findById(id);
    }

    @PostMapping("/workExperiences")
    public WorkExperience addworkExperience(@RequestBody WorkExperience workExperience) {
        workExperienceRepository.save(workExperience);
        return workExperience;
    }

    @PutMapping("/workExperiences/{id}")
    public Optional<WorkExperience> updateworkExperience(@PathVariable Long id, @RequestBody WorkExperience workExperience) {
        Optional<WorkExperience> workExperienceNew = workExperienceRepository.findById(id);
        workExperienceNew.get().setPeriod(workExperience.getPeriod());
        workExperienceNew.get().setPosition(workExperience.getPosition());
        workExperienceNew.get().setDescription(workExperience.getDescription());
        workExperienceNew.get().setCompany(workExperience.getCompany());
        workExperienceRepository.save(workExperience);
        return workExperienceNew;
    }

    @PutMapping("/workExperiences/delete/{id}")
    public void removeworkExperience(@PathVariable Long id) {
        Optional<WorkExperience> workExperienceNew = workExperienceRepository.findById(id);
        workExperienceRepository.deleteById(id);
    }
}