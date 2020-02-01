package com.registration.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "registration")
public class RegistrationModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @column(name = "firstname")
  private String firstname;
  @column(name = "lastname")
  private String lastname;
  @column(name = "email")
  private String email;
  @column(name ="birthdate")
  private String birthdate;
  @column(name="location")
  private String location;
  @column(name= "diet")
  private String diet;
  @column(name= "allergies")
  private String allergies;
  @column(name="gender")
  private String gender;
  
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getBirthdate() {
	return birthdate;
}
public void setBirthdate(String birthdate) {
	this.birthdate = birthdate;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getDiet() {
	return diet;
}
public void setDiet(String diet) {
	this.diet = diet;
}
public String getAllergies() {
	return allergies;
}
public void setAllergies(String allergies) {
	this.allergies = allergies;
}
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}
  