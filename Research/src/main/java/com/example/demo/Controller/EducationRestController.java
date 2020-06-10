package com.example.demo.Controller;

import com.example.demo.Model.Education;
import com.example.demo.Repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {("*")})
@RestController
public class EducationRestController {
    @Autowired
    private EducationRepository educationRepository;

    @GetMapping("/educations")
    public List<Education> education() {
        return (List<Education>) educationRepository.findAll();
    }

    @GetMapping("/educations/{id}")
    public Optional<Education> educations(@PathVariable Long id) {
        return educationRepository.findById(id);
    }

    @PostMapping("/educations")
    public Education addeducation(@RequestBody Education education) {
        educationRepository.save(education);
        return education;
    }

    @PutMapping("/educations/{id}")
    public Optional<Education> updateeducation(@PathVariable Long id, @RequestBody Education education) {
        Optional<Education> educationNew = educationRepository.findById(id);
        educationNew.get().setPeriod(education.getPeriod());
        educationNew.get().setMajor(education.getMajor());
        educationNew.get().setSchool(education.getSchool());
        educationNew.get().setDescription(education.getDescription());
        educationNew.get().setDegree(education.getDegree());
        educationRepository.save(education);
        return educationNew;
    }

    @PutMapping("/educations/delete/{id}")
    public void removeeducation(@PathVariable Long id) {
        Optional<Education> educationNew = educationRepository.findById(id);
        educationRepository.deleteById(id);
    }
}
