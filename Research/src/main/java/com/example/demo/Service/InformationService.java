package com.example.demo.Service;

import com.example.demo.Model.Information;

import java.util.Optional;

public interface InformationService {
    Iterable<Information> findAll();

    Optional<Information> findById(Long id);

    void remove(Long id);

    void save(Information information);
}
