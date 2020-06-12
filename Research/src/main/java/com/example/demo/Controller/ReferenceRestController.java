package com.example.demo.Controller;


import com.example.demo.Model.Reference;
import com.example.demo.Repository.ReferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = {("*")})
@RestController
public class ReferenceRestController {

    @Autowired
    private ReferenceRepository referenceRepository;

    @GetMapping("/references")
    public List<Reference> reference() {
        return (List<Reference>) referenceRepository.findAll();
    }

    @GetMapping("/references/{id}")
    public Optional<Reference> references(@PathVariable Long id) {
        return referenceRepository.findById(id);
    }

    @PostMapping("/references")
    public Reference addreference(@RequestBody Reference reference) {
        referenceRepository.save(reference);
        return reference;
    }

    @PutMapping("/references/{id}")
    public Reference updateReference(@PathVariable Long id, @RequestBody Reference newReference) {
        return referenceRepository.findById(id)
                .map(reference -> {
                    reference.setName(newReference.getName());
                    reference.setPosition(newReference.getPosition());
                    reference.setImage(newReference.getImage());
                    reference.setDescription(newReference.getDescription());
                    reference.setCompany(newReference.getCompany());
                    return referenceRepository.save(reference);
                })
                .orElseGet(() -> {
                    newReference.setId(id);
                    return referenceRepository.save(newReference);
                });
    }

    @PutMapping("/references/delete/{id}")
    public void removereference(@PathVariable Long id) {
        Optional<Reference> referenceNew = referenceRepository.findById(id);
        referenceRepository.deleteById(id);
    }
}
