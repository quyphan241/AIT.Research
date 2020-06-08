package com.example.demo.Service.Impl;

import com.example.demo.Model.Information;
import com.example.demo.Model.Skill;
import com.example.demo.Repository.InformationRepository;
import com.example.demo.Repository.SkillRepository;
import com.example.demo.Service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SkillServiceImpl implements SkillService {
    @Autowired
    private SkillRepository skillRepository;

    @Override
    public Iterable<Skill> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public Optional<Skill> findById(Long id) {
        return skillRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        skillRepository.deleteById(id);
    }

    @Override
    public void save(Skill skill) {
        skillRepository.save(skill);
    }
}
