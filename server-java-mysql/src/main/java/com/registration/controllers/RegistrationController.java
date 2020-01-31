package com.registration.controllers;

import java.util.List;

import com.registration.models.RegistrationModel;
import com.registration.models.RegistrationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/registrations")
@CrossOrigin(origins = "http://localhost:4200,http://localhost:3000")
public class RegistrationController {

  @Autowired
  RegistrationRepository registrationRepository;

  @GetMapping()
  public List<RegistrationModel> getRegistrationModel() {
    return registrationRepository.findAll();
  }

  @PostMapping()
  public RegistrationModel addRegistrationModel(@RequestBody RegistrationModel registrationModel) {
    return registrationRepository.save(registrationModel);
  }

  @DeleteMapping("/{id}")
  public void deleteRegistrationModel(@PathVariable Long id) {
    registrationRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public RegistrationModel updateRegistrationModel(@PathVariable Long id, @RequestBody RegistrationModel registrationModel) {
    RegistrationModel foundRegistrationModel = registrationRepository.findById(id).orElse(null);
    if (foundRegistrationModel != null) {
      foundRegistrationModel.setFirstname(registrationModel.getFirstname());
      foundRegistrationModel.setLastname(registrationModel.getLastname());
      foundRegistrationModel.setEmail(registrationModel.getEmail());
      foundRegistrationModel.setPassword(registrationModel.getPassword());
      foundRegistrationModel.setLocation(registrationModel.getLocation());
      foundRegistrationModel.setBirthdate(registrationModel.getBirthdate());
      foundRegistrationModel.setDiet(registrationModel.getDiet());
      foundRegistrationModel.setAllergies(registrationModel.getAllergies());
      foundRegistrationModel.setGender(registrationModel.getGender());
      registrationRepository.save(foundRegistrationModel);
      return foundRegistrationModel;
    }
    return null;
  }

}