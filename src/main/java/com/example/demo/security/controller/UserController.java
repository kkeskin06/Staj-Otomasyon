package com.example.demo.security.controller;

import com.example.demo.security.domain.Role;
import com.example.demo.security.domain.User;
import com.example.demo.security.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping
    public String getCurrentUser(){
       return userService.currentUser();
    }


    @GetMapping("/name")
    public User getUser(){
        return userService.getUserByName();
    }
    @GetMapping("/role")
    public Set<Role> getRole(){
        return userService.getRole();
    }
}
