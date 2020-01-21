package com.recipes.controllers;

import java.util.List;

import com.recipes.models.RecipeModel;
import com.recipes.models.RecipeRepository;


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
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:4200,http://localhost:3000")
public class RecipeController {

	 @Autowired
	  RecipeRepository recipeRepository;

	  @GetMapping()
	  public List<RecipeModel> getRecipeModel() {
	    return recipeRepository.findAll();
	  }

	  @PostMapping()
	  public RecipeModel addRecipeModel(@RequestBody RecipeModel recipeModel) {
	    return recipeRepository.save(recipeModel);
	  }

	  @DeleteMapping("/{id}")
	  public void deleteRecipeModel(@PathVariable Long id) {
	    recipeRepository.deleteById(id);
	  }

	  @PutMapping("/{id}")
	  public RecipeModel updateRecipeModel(@PathVariable Long id, @RequestBody RecipeModel recipeModel) {
	    RecipeModel foundRecipeModel = recipeRepository.findById(id).orElse(null);
	    if (foundRecipeModel != null) {
	      foundRecipeModel.setRecipename(recipeModel.getRecipename());
	      foundRecipeModel.setIngredients(recipeModel.getIngredients());
	      foundRecipeModel.setInstructions(recipeModel.getInstructions());
	      recipeRepository.save(foundRecipeModel);
	      return foundRecipeModel;
	    }
	    return null;
	  }

}
