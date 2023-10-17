package com.example.demo.controller;


import com.example.demo.entity.Sirket;
import com.example.demo.service.SirketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("sirket")
@CrossOrigin
public class SirketController {

    @Autowired
    private SirketService sirketService;

    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/get")
    public ResponseEntity<List<Sirket>> getSirket(){
        List<Sirket> sirket = sirketService.getSirket();
        return ResponseEntity.ok(sirket);
    }
    @PreAuthorize("hasRole('ROLE_Sirket')")
    @GetMapping("/get/detay")
    public Sirket getSirketBySirketYetkilisi(){
        return sirketService.getSirketBySirketYetkilisi();
    }


}
