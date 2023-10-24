package com.example.demo.controller;


import com.example.demo.entity.BasvuruFormu;
import com.example.demo.entity.FileEntity;
import com.example.demo.entity.Ogrenci;
import com.example.demo.entity.Staj;
import com.example.demo.service.OgrenciService;
import com.example.demo.service.StajService;
import com.example.demo.service.impl.BasvuruFormuServiceImpl;
import com.example.demo.service.impl.FileServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/basvuru")
@CrossOrigin
public class BasvuruFormuController {

    @Autowired
    private BasvuruFormuServiceImpl basvuruFormuService;
    @Autowired
    private FileServiceImpl fileService;

    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/get")
    public ResponseEntity<List<BasvuruFormu>> getBasvuru(){
        List<BasvuruFormu> basvuruFormu = basvuruFormuService.getBasvuru();
        return ResponseEntity.ok(basvuruFormu);
    }

    @PreAuthorize("hasRole('ROLE_Ogrenci')")
    @PostMapping("/add")
    public String save(@RequestBody BasvuruFormu basvuruFormu){
        basvuruFormuService.saveBasvuruFormu(basvuruFormu);
        return "basvuru eklendi";
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Ogrenci')")
    @GetMapping("/get/get")
    public ResponseEntity<List<BasvuruFormu>> getbyogrenci(){
        List<BasvuruFormu> basvuruFormu = basvuruFormuService.getBasvuruOgrenciId();
        return ResponseEntity.ok(basvuruFormu);
    }


    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/edit/{id}")
    public String updateBasvuruFormu(@PathVariable("id") Long id){
        basvuruFormuService.updateBasvuru(id);
        return "Basvuru formu guncellendi";
    }

    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/edit2/{id}")
    public String updateBasvuruFormu2(@PathVariable("id") Long id){
        // BasvuruFormu resultBasvuruFormu = basvuruFormuService.updateBasvuru2(id);
        basvuruFormuService.updateBasvuru2(id);
        return" ResponseEntity.ok(resultBasvuruFormu)";
    }
    @PreAuthorize("hasRole('ROLE_Sirket')")
    @GetMapping("/getbysirket")
    public ResponseEntity<List<BasvuruFormu>> getbysirket(){
        List<BasvuruFormu> sirket = basvuruFormuService.getBasvuruSirketId();
        return ResponseEntity.ok(sirket);
    }

    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Ogrenci') OR hasRole('ROLE_Sirket') ")
    @GetMapping("/detay/{id}")
    public List<BasvuruFormu> detay(@PathVariable("id") Long id){
        return basvuruFormuService.getBasvuruById(id);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/search/{keyword}")
    public List<BasvuruFormu> search(@PathVariable("keyword") String keyword){
        return basvuruFormuService.search(keyword);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/pageable/{pageNo}")
    public ResponseEntity<List<BasvuruFormu>> getAll(@PathVariable("pageNo") Integer pageNo){
        List<BasvuruFormu> list = basvuruFormuService.getAllBasvuruFormu(pageNo,2);
        return ResponseEntity.ok(list);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/sirala")
    public List<BasvuruFormu> sirala(){
        return basvuruFormuService.sirala();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/sirala2")
    public List<BasvuruFormu> sirala2(){
        return basvuruFormuService.sirala2();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/siralaAd")
    public List<BasvuruFormu> siralaAd(){
        return basvuruFormuService.siralaAd();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/siralaStaj")
    public List<BasvuruFormu> siralaStaj(){
        return basvuruFormuService.siralaStaj();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen')")
    @GetMapping("/siralaDurum")
    public List<BasvuruFormu> siralaDurum(){
        return basvuruFormuService.siralaDurum();
    }
}
