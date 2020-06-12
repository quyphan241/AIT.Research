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
    public Skill updateSkill(@PathVariable Long id, @RequestBody Skill newSkill) {
        return skillRepository.findById(id)
                .map(skill -> {
                    skill.setName(newSkill.getName());
                    skill.setProficiency(newSkill.getProficiency());
                    return skillRepository.save(skill);
    })
                .orElseGet(() -> {
                    newSkill.setId(id);
                    return skillRepository.save(newSkill);
                });
    }

    @PutMapping("/skills/delete/{id}")
    public void removeSkill(@PathVariable Long id) {
        Optional<Skill> skillNew = skillRepository.findById(id);
        skillRepository.deleteById(id);
    }
}
