package com.romero.kcal.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RecipeController {
    @Value("${KEY}")
    public String KEY;

    @Value("${HOST}")
    public String HOST;

    @GetMapping("/recipes")
    public String recipes(Model model){
        model.addAttribute("KEY",KEY);
        model.addAttribute("HOST", HOST);
        return "recipe";
    }
}
