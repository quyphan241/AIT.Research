package com.example.demo.Controller;

import com.example.demo.Model.Information;
import com.example.demo.Repository.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {("*")})
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
    public Information updateInformation(@PathVariable Long id, @RequestBody Information newInformation) {
//        Optional<Information> informationNew = informationRepository.findById(id);
//        informationNew.get().setAbout(information.getAbout());
//        informationNew.get().setName(information.getName());
//        informationNew.get().setAge(information.getAge());
//        informationNew.get().setPhoneNumber(information.getPhoneNumber());
//        informationNew.get().setEmail(information.getEmail());
//        informationNew.get().setAddress(information.getAddress());
//        informationNew.get().setCareer(information.getCareer());
//        informationRepository.save(information);
//        return informationNew;
        return informationRepository.findById(id)
                .map(information -> {
                    information.setName(newInformation.getName());
                    information.setAbout(newInformation.getAbout());
                    information.setAge(newInformation.getAge());
                    information.setPhoneNumber(newInformation.getPhoneNumber());
                    information.setEmail(newInformation.getEmail());
                    information.setAddress(newInformation.getAddress());
                    information.setCareer(newInformation.getCareer());
                    return informationRepository.save(information);
                })
                .orElseGet(() -> {
                    newInformation.setId(id);
                    return informationRepository.save(newInformation);
                });
    }

    @DeleteMapping("/informations/delete/{id}")
    public void removeInformation(@PathVariable Long id) {
        Optional<Information> informationNew = informationRepository.findById(id);
        informationRepository.deleteById(id);
    }

}
