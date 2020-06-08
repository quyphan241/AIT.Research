package com.example.demo.Service.Impl;

import com.example.demo.Model.Reference;
import com.example.demo.Repository.ReferenceRepository;
import com.example.demo.Service.ReferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReferenceServiceImpl implements ReferenceService {
    @Autowired
    private ReferenceRepository referenceRepository;
    @Override
    public Iterable<Reference> findAll() {
        return referenceRepository.findAll();
    }

    @Override
    public Optional<Reference> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void remove(Long id) {
        referenceRepository.deleteById(id);
    }

    @Override
    public void save(Reference reference) {
        referenceRepository.save(reference);
    }
}
