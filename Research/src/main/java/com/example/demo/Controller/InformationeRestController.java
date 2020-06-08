package com.example.demo.Controller;

import com.example.demo.Model.Information;
import com.example.demo.Repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class InformationeRestController {

    @Autowired
    private InformationRepository informationRepository;

    @GetMapping("/informations")
    public List<Information> information() {
        return (List<Information>) informationRepository.findAll();
    }

    @GetMapping("/informations/{id}")
    public Optional<Information> informations(@PathVariable Long id) {
        return informationRepository.findById(id);
    }

    @PostMapping("/informations")
    public Information addInformation(@RequestBody Information information) {
        informationRepository.save(information);
        return information;
    }

    @PutMapping("/informations/{id}")
    public Optional<Information> updateInformation(@PathVariable Long id, @RequestBody Information information) {
        Optional<Information> informationNew = informationRepository.findById(id);
        informationNew.get().setAbout(information.getAbout());
        informationNew.get().setName(information.getName());
        informationNew.get().setEmail(information.getEmail());
        informationNew.get().setAddress(information.getAddress());
        informationNew.get().setCareer(information.getCareer());
        informationRepository.save(information);
        return informationNew;
    }

    @PutMapping("/informations/delete/{id}")
    public void removeInformation(@PathVariable Long id) {
        Optional<Information> informationNew = informationRepository.findById(id);
        informationRepository.deleteById(id);
    }

}
