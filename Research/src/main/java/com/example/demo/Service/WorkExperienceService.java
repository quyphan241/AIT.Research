package com.example.demo.Service;

import com.example.demo.Model.Skill;
import com.example.demo.Model.WorkExperience;

import java.util.Optional;

public interface WorkExperienceService {
    Iterable<WorkExperience> findAll();

    Optional<WorkExperience> findById(Long id);

    void remove(Long id);

    void save(WorkExperience workExperience);
}
