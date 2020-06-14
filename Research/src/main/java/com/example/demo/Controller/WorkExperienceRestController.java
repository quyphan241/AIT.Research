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
    public WorkExperience updateworkExperience(@PathVariable Long id, @RequestBody WorkExperience newWorkExperience) {
        return workExperienceRepository.findById(id)
                .map(workExperience -> {
                    workExperience.setPeriod(newWorkExperience.getPeriod());
                    workExperience.setPosition(newWorkExperience.getPosition());
                    workExperience.setCompany(newWorkExperience.getCompany());
                    workExperience.setDescription(newWorkExperience.getDescription());
                    return workExperienceRepository.save(workExperience);
                })
                .orElseGet(() -> {
                    newWorkExperience.setId(id);
                    return workExperienceRepository.save(newWorkExperience);
                });
    }

    @DeleteMapping("/workExperiences/delete/{id}")
    public void removeWorkExperience(@PathVariable Long id) {
        Optional<WorkExperience> workExperienceNew = workExperienceRepository.findById(id);
        workExperienceRepository.deleteById(id);
    }
}