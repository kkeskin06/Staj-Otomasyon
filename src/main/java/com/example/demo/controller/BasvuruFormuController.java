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




    @GetMapping("/get")
    public ResponseEntity<List<BasvuruFormu>> getBasvuru(){
        List<BasvuruFormu> basvuruFormu = basvuruFormuService.getBasvuru();
        return ResponseEntity.ok(basvuruFormu);
    }

    @CrossOrigin
    @PostMapping("/add")
    public String save(@RequestBody BasvuruFormu basvuruFormu){
        basvuruFormuService.saveBasvuruFormu(basvuruFormu);
        return "basvuru eklendi";
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<List<BasvuruFormu>> getbyogrenci(@PathVariable("id") Long id){
        List<BasvuruFormu> basvuruFormu = basvuruFormuService.getBasvuruOgrenciId(id);
        return ResponseEntity.ok(basvuruFormu);
    }


    @CrossOrigin
    @GetMapping("/edit/{id}")
    public String updateBasvuruFormu(@PathVariable("id") Long id){
       // BasvuruFormu resultBasvuruFormu = basvuruFormuService.updateBasvuru(id);
        basvuruFormuService.updateBasvuru(id);
        return" ResponseEntity.ok(resultBasvuruFormu)";
    }

    @GetMapping("/edit2/{id}")
    public String updateBasvuruFormu2(@PathVariable("id") Long id){
        // BasvuruFormu resultBasvuruFormu = basvuruFormuService.updateBasvuru2(id);
        basvuruFormuService.updateBasvuru2(id);
        return" ResponseEntity.ok(resultBasvuruFormu)";
    }

    @GetMapping("/getbysirket/{id}")
    public ResponseEntity<List<BasvuruFormu>> getbysirket(@PathVariable("id") Long id){
        List<BasvuruFormu> sirket = basvuruFormuService.getBasvuruSirketId(id);
        return ResponseEntity.ok(sirket);
    }


    @GetMapping("/detay/{id}")
    public List<BasvuruFormu> detay(@PathVariable("id") Long id){

        return basvuruFormuService.getBasvuruById(id);
    }

    @GetMapping("/search/{keyword}")
    public List<BasvuruFormu> search(@PathVariable("keyword") String keyword){

        return basvuruFormuService.search(keyword);
    }
    @GetMapping("/pageable/{pageNo}")
    public ResponseEntity<List<BasvuruFormu>> getAll(@PathVariable("pageNo") Integer pageNo
                                                     ){
        List<BasvuruFormu> list = basvuruFormuService.getAllBasvuruFormu(pageNo,2);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/sirala")
    public List<BasvuruFormu> sirala(){

        return basvuruFormuService.sirala();
    }

    @GetMapping("/sirala2")
    public List<BasvuruFormu> sirala2(){

        return basvuruFormuService.sirala2();
    }

    @GetMapping("/siralaAd")
    public List<BasvuruFormu> siralaAd(){

        return basvuruFormuService.siralaAd();
    }

    @GetMapping("/siralaStaj")
    public List<BasvuruFormu> siralaStaj(){

        return basvuruFormuService.siralaStaj();
    }

    @GetMapping("/siralaDurum")
    public List<BasvuruFormu> siralaDurum(){

        return basvuruFormuService.siralaDurum();
    }
}
