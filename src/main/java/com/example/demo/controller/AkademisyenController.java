package com.example.demo.controller;

import com.example.demo.entity.Akademisyen;
import com.example.demo.service.impl.AkademisyenServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/akademisyen")
public class AkademisyenController {

    private final AkademisyenServiceImpl akademisyenService;

    public AkademisyenController(AkademisyenServiceImpl akademisyenService) {
        this.akademisyenService = akademisyenService;
    }

    @GetMapping
    public Akademisyen GetAkademisyen(){
        return akademisyenService.getByUserId();
    }
}
