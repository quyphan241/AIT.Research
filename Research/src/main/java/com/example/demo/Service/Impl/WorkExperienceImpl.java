package com.example.demo.Service.Impl;

import com.example.demo.Model.WorkExperience;
import com.example.demo.Repository.WorkExperienceRepository;
import com.example.demo.Service.WorkExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WorkExperienceImpl implements WorkExperienceService {
    @Autowired
    private WorkExperienceRepository workExperienceRepository;
    @Override
    public Iterable<WorkExperience> findAll() {
        return workExperienceRepository.findAll();
    }

    @Override
    public Optional<WorkExperience> findById(Long id) {
        return workExperienceRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        workExperienceRepository.deleteById(id);
    }

    @Override
    public void save(WorkExperience workExperience) {
        workExperienceRepository.save(workExperience);
    }
}
