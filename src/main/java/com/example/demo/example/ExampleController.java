package com.example.demo.example;

import com.example.demo.entity.BasvuruFormu;
import com.example.demo.user.JwtUser;
import com.example.demo.user.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ExampleController {


    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @GetMapping("/user")
    public ExampleMessage userEndpoint(){
        return new ExampleMessage("hello user");
    }

    @GetMapping("/admin")
    public ExampleMessage adminEndpoint() {
        return new ExampleMessage("Hello admin!");
    }



}
