package com.romero.kcal.controllers;

import com.romero.kcal.models.AppUser;
import com.romero.kcal.models.MacroNutrients;
import com.romero.kcal.models.UserWithRole;
import com.romero.kcal.repositories.MacroRepository;
import com.romero.kcal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CalculatorController {
    @Autowired
    private MacroRepository macrosDao;
    @Autowired
    private UserRepository usersDao;
    @Value("${KEY}")
    public String KEY;
    @Value("${MACRO_HOST}")
    public String MACRO_HOST;

    @GetMapping("/calculator")
    public String macrCounter(Model model) {
        model.addAttribute("KEY", KEY);
        model.addAttribute("MACRO_HOST", MACRO_HOST);
        model.addAttribute("macros", new MacroNutrients());
        return "/calculator/calculator";
    }

    @GetMapping("/macros")
    public String macros(){

        return "calculator/macros";
    }

    @PostMapping("/macros")
    public String macros(String protein, String carbs, String fat, String diet, String goal, int calories) {
        UserWithRole loggedin = (UserWithRole) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser user = usersDao.findByUsername(loggedin.getUsername());
        MacroNutrients macros = new MacroNutrients();
        macros.setProtein(Integer.parseInt(protein));
        macros.setCarbs(Integer.parseInt(carbs));
        macros.setFat(Integer.parseInt(fat));
        macros.setDiet(diet);
        macros.setCalories(calories);
        macros.setGoal(goal);
        System.out.println(macros.getProtein());
        System.out.println(macros.getCarbs());
        System.out.println(macros.getFat());
        System.out.println(macros.getCalories());
        System.out.println(macros.getDiet());
        System.out.println(macros.getGoal());


        return "redirect:/macros";
    }
}
