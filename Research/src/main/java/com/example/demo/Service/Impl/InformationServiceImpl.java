package com.example.demo.Service.Impl;

import com.example.demo.Model.Information;
import com.example.demo.Repository.InformationRepository;
import com.example.demo.Service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InformationServiceImpl implements InformationService {

    @Autowired
    private InformationRepository informationRepository;

    @Override
    public Iterable<Information> findAll() {
        return informationRepository.findAll();
    }

    @Override
    public Optional<Information> findById(Long id) {
        return informationRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        informationRepository.deleteById(id);
    }

    @Override
    public void save(Information information) {
        informationRepository.save(information);
    }
}
