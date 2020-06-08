package com.example.demo.Service;

import com.example.demo.Model.Reference;

import java.util.Optional;

public interface ReferenceService {
    Iterable<Reference> findAll();

    Optional<Reference> findById(Long id);

    void remove(Long id);

    void save(Reference reference);
}
