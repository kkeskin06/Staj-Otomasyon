package com.example.demo.security.controller;

import com.example.demo.security.DatabaseUserDetailService;
import com.example.demo.security.domain.JwtRequest;
import com.example.demo.security.domain.JwtResponse;
import com.example.demo.security.domain.User;
import com.example.demo.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwtController {

    @Autowired
    private DatabaseUserDetailService databaseUserDetailsService;

    @Autowired
    private UserService userService;
    @PostMapping("/auth")
    public JwtResponse auth(@RequestBody JwtRequest jwtRequest) throws Exception {
        return databaseUserDetailsService.createJwtToken(jwtRequest);
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) throws Exception {
        return userService.register(user);
    }
}
