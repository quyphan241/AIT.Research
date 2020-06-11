package com.example.demo.Controller;

import com.example.demo.Model.Skill;
import com.example.demo.Repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {("*")})
@RestController
public class SkillRestController {
    @Autowired
    private SkillRepository skillRepository;

    @GetMapping("/skills")
    public List<Skill> skill() {
        return (List<Skill>) skillRepository.findAll();
    }

    @GetMapping("/skills/{id}")
    public Optional<Skill> skills(@PathVariable Long id) {
        return skillRepository.findById(id);
    }

    @PostMapping("/skills")
    public Skill addSkill(@RequestBody Skill skill) {
        skillRepository.save(skill);
        return skill;
    }

    @PutMapping("/skills/{id}")
    public Optional<Skill> updateSkill(@PathVariable Long id, @RequestBody Skill skill) {
        Optional<Skill> skillNew = skillRepository.findById(id);
        skillNew.get().setName(skill.getName());
        skillNew.get().setProficiency(skill.getProficiency());
        skillRepository.save(skill);
        return skillNew;
    }

    @PutMapping("/skills/delete/{id}")
    public void removeSkill(@PathVariable Long id) {
        Optional<Skill> skillNew = skillRepository.findById(id);
        skillRepository.deleteById(id);
    }
}
