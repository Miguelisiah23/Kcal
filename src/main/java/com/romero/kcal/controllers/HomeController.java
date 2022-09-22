package com.romero.kcal.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @Value("${KEY}")
    public String KEY;
    @Value("${HOST}")
    public String HOST;
    @GetMapping("/")
    public String homepage(Model model){
        model.addAttribute("KEY",KEY);
        model.addAttribute("HOST", HOST);
        return "index";
    }
}
