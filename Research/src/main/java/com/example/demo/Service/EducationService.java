package com.example.demo.Service;

import com.example.demo.Model.Education;
import com.example.demo.Model.Information;

import java.util.Optional;

public interface EducationService {
    Iterable<Education> findAll();

    Optional<Education> findById(Long id);

    void remove(Long id);

    void save(Education category);
}
