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
    public Education updateEducation(@PathVariable Long id, @RequestBody Education newEducation) {
        return educationRepository.findById(id)
                .map(education -> {
                    education.setPeriod(newEducation.getPeriod());
                    education.setMajor(newEducation.getMajor());
                    education.setSchool(newEducation.getMajor());
                    education.setDescription(newEducation.getDescription());
                    education.setDegree(newEducation.getDegree());
                    return educationRepository.save(education);
                })
                .orElseGet(() -> {
                    newEducation.setId(id);
                    return educationRepository.save(newEducation);
                });
    }

    @PutMapping("/educations/delete/{id}")
    public void removeeducation(@PathVariable Long id) {
        Optional<Education> educationNew = educationRepository.findById(id);
        educationRepository.deleteById(id);
    }
}
