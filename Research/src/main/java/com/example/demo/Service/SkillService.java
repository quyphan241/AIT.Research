package com.example.demo.Service;

import com.example.demo.Model.Reference;
import com.example.demo.Model.Skill;

import java.util.Optional;

public interface SkillService {
    Iterable<Skill> findAll();

    Optional<Skill> findById(Long id);

    void remove(Long id);

    void save(Skill skill);
}
