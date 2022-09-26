package com.romero.kcal.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculatorController {
    @Value("${KEY}")
    public String KEY;
    @Value("${MACRO_HOST}")
    public String MACRO_HOST;

    @GetMapping("/calculator")
    public String macrCounter(Model model) {
        model.addAttribute("KEY", KEY);
        model.addAttribute("MACRO_HOST", MACRO_HOST);
        return "/calculator/calculator";
    }

    @GetMapping("/macros")
    public String macros(){
        return "calculator/macros";
    }

    @PostMapping("/macros")
    public String macroCounter(Model model, @RequestParam(name = "activity-lv") String activity, @RequestParam(name = "goal") String goal, @RequestParam(name = "age") String age, @RequestParam(name = "gender") String gender, @RequestParam(name = "height") String height, @RequestParam(name = "weight") String weight) {
        model.addAttribute("age", age);
        model.addAttribute("height", height);
        model.addAttribute("weight", weight);
        model.addAttribute("gender", gender);
        model.addAttribute("activityLv", activity);
        model.addAttribute("goal", goal);

        return "calculator/calculator";
    }
}
