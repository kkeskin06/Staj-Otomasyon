package com.example.demo.controller;

import com.example.demo.entity.BasvuruFormu;
import com.example.demo.entity.SicilFisi;
import com.example.demo.entity.TeslimBelgeleri;
import com.example.demo.service.TeslimBelgeleriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/teslim")
public class TeslimBelgelericontroller {
    @Autowired
    private TeslimBelgeleriService teslimBelgeleriService;

    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/getTeslimbelgeleri")
    public ResponseEntity<List<TeslimBelgeleri>> getTeslimBelgeleri(){
        List<TeslimBelgeleri> teslimbelgeleri = teslimBelgeleriService.getTeslimBelgeleri();
        return ResponseEntity.ok(teslimbelgeleri);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/get/{id}")
    public Optional<List<TeslimBelgeleri>> getTeslimBelgeleribyid(@PathVariable("id") Long id){
        return teslimBelgeleriService.getTeslimBelgeleriById(id);
    }

    @PreAuthorize("hasRole('ROLE_Ogrenci')")
    @PostMapping("/add/{id}")
    public String save(@RequestBody TeslimBelgeleri teslimBelgeleri, @PathVariable("id") Long id){
        teslimBelgeleriService.saveTeslimBelgeleri(teslimBelgeleri,id);
        return "belgeler teslim edildi.";
    }

    @PreAuthorize("hasRole('ROLE_Ogrenci')")
    @PostMapping("/add/sicilfisi/{id}")
    public String sicilfisi(@RequestBody SicilFisi sicilFisi, @PathVariable("id") Long id){
        teslimBelgeleriService.saveSicilFisi(sicilFisi,id);
        return "belgeler teslim edildi.";
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/getTeslimbelgeleri/{id}")
    public ResponseEntity<List<TeslimBelgeleri>> getTeslimbelgeleribyogrenci(@PathVariable("id") Long id){
      List<TeslimBelgeleri> belgeler =   teslimBelgeleriService.getTeslimBelgeleriByOgrenci_id(id);
      return ResponseEntity.ok(belgeler);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/search/{keyword}")
    public List<TeslimBelgeleri> search(@PathVariable("keyword") String keyword){

        return teslimBelgeleriService.search(keyword);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/edit/onay/{id}")
    public void editTeslimDurumu(@PathVariable("id") Long id){
        teslimBelgeleriService.onayTeslimBelgeleri(id);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/edit/red/{id}")
    public void redTeslimDurumu(@PathVariable("id") Long id){
        teslimBelgeleriService.redTeslimBelgeleri(id);
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/siralano")
    public List<TeslimBelgeleri> siralano(){
        return teslimBelgeleriService.siralaNo();
    }

    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/siralanoDesc")
    public List<TeslimBelgeleri> siralanoDesc(){
        return teslimBelgeleriService.siralaNoDesc();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/siralaad")
    public List<TeslimBelgeleri> siralaad(){
        return teslimBelgeleriService.siralaAd();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/siralaadDesc")
    public List<TeslimBelgeleri> siralaadDesc(){
        return teslimBelgeleriService.siralaAdDesc();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/siraladurum")
    public List<TeslimBelgeleri> siraladurum(){
        return teslimBelgeleriService.siralaDurum();
    }
    @PreAuthorize("hasRole('ROLE_Akademisyen') OR hasRole('ROLE_Sirket')")
    @GetMapping("/siraladurumDesc")
    public List<TeslimBelgeleri> siraladurumDesc(){
        return teslimBelgeleriService.siralaDurumDesc();
    }
}
