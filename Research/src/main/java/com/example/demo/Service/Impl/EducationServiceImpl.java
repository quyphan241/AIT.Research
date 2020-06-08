package com.example.demo.Service.Impl;

import com.example.demo.Model.Education;
import com.example.demo.Repository.EducationRepository;
import com.example.demo.Service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EducationServiceImpl implements EducationService {
    @Autowired
    private EducationRepository educationRepository;

    @Override
    public Iterable<Education> findAll() {
        return educationRepository.findAll();
    }

    @Override
    public Optional<Education> findById(Long id) {
        return educationRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        educationRepository.deleteById(id);
    }

    @Override
    public void save(Education education) {
        educationRepository.save(education);
    }

}
