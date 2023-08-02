package com.example.demo.controller;


import com.example.demo.entity.Sirket;
import com.example.demo.service.SirketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("sirket")
@CrossOrigin
public class SirketController {

    @Autowired
    private SirketService sirketService;

    @CrossOrigin
    @GetMapping("/get")
    public ResponseEntity<List<Sirket>> getSirket(){
        List<Sirket> sirket = sirketService.getSirket();
        return ResponseEntity.ok(sirket);
    }

    @GetMapping("/get/{id}")
    public Sirket getSirketBySirketYetkilisi(@PathVariable("id") Long id){
        return sirketService.getSirketBySirketYetkilisi(id);
    }


}
