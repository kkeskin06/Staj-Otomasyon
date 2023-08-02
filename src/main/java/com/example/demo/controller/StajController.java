package com.example.demo.controller;

import com.example.demo.entity.Staj;
import com.example.demo.service.StajService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/staj")
@CrossOrigin
public class StajController {

    @Autowired
    private StajService stajService;

    @GetMapping("/get")
    public ResponseEntity<List<Staj>> getStaj(){
        List<Staj> staj = stajService.getStaj();
        return ResponseEntity.ok(staj);
    }
}
