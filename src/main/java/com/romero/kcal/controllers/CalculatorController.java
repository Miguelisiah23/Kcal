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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
        return "/calculator/calculator";
    }

    @GetMapping("/macros")
    public String macros(){
        return "calculator/macros";
    }

    @PostMapping("/macros")
    public String macroCounter() {
        UserWithRole loggedin = (UserWithRole) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        MacroNutrients macros = new MacroNutrients(diet,protein,carbs,fat,kcal);
        AppUser user = usersDao.findByUsername(loggedin.getUsername());
        System.out.println("hello?");
//        macros.setUser(user);
//        macrosDao.save(macros);



        return "redirect:/macros";
    }
}
