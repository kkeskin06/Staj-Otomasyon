package com.example.demo.controller;

import com.example.demo.entity.Ogrenci;
import com.example.demo.service.OgrenciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ogrenci")
@CrossOrigin
public class OgrenciController {
    @Autowired
    private OgrenciService ogrenciService;

    @PostMapping("/add")
    public String save(@RequestBody Ogrenci ogrenci){
        ogrenciService.saveogrenci(ogrenci);
        return"ogrenci kaydedildi";
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Ogrenci> get(@PathVariable("id") Long id){
        Ogrenci ogrenci = ogrenciService.getOgrenci(id);
        return ResponseEntity.ok(ogrenci);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/get")
    public ResponseEntity<List<Ogrenci>> getAll(){
        List<Ogrenci> ogrenci = ogrenciService.getAll();
        return ResponseEntity.ok(ogrenci);
    }

}
