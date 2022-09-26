package com.romero.kcal.controllers;

import com.romero.kcal.models.AppUser;
import com.romero.kcal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired
    private UserRepository usersDao;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/register")
    public String register(){
        return "register";
    }

    @PostMapping("/register")
    public String register(String username, String email, String password){
        if (usersDao.findByUsername(username) == null) {
            AppUser user = new AppUser(username, email, passwordEncoder.encode(password));
            usersDao.save(user);
//            String subject = "Account creation";
//            String body = "Welcome " + user.getUsername() + ", You have created a new account ! your login username is : " + user.getUsername();
//            emailService.prepareAndSend(user, subject, body);
        }
        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session){
        session.invalidate();
        return "redirect:/";
    }
}
