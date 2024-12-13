package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String showLoginPage(Model model) {
        model.addAttribute("user", new User());
        return "login";
    }

    @GetMapping("/register")
    public String showRegistrationPage(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

@PostMapping("/register")
public String registerUser(@ModelAttribute("user") User user) {
    if (user.getUsername() != null && user.getPassword() != null) {
        try {
            userService.registerUser(user);
            return "redirect:/auth/login";
        } catch (Exception e) {
            return "redirect:/auth/register?error";
        }
    }
    return "redirect:/auth/register?error";
}

    @PostMapping("/login")
    public String loginUser(@ModelAttribute User user) {
        User authenticatedUser = userService.loginUser(user.getUsername(), user.getPassword());
        if (authenticatedUser != null) {
            return "redirect:/";
        }
        return "redirect:/auth/login?error";
    }
}