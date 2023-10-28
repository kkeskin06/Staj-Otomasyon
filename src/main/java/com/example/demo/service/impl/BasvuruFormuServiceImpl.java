package com.example.demo.service.impl;

import com.example.demo.entity.*;
import com.example.demo.repository.*;
import com.example.demo.security.service.UserService;
import com.example.demo.service.BasvuruFormuService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BasvuruFormuServiceImpl implements BasvuruFormuService {

    private final BasvuruFormuRepository basvuruFormuRepository;
    private final OgrenciRepository ogrenciRepository;
    private final StajRepository stajRepository;
    private final SirketServiceImpl sirketService;
    private final SirketRepository sirketRepository;
    private final FileRepository fileRepository;

    private final BasvuruFormuRepo repo;

    private final UserService userService;

    private final SirketYetkilisiRepository sirketYetkilisiRepository;

    public BasvuruFormuServiceImpl(BasvuruFormuRepository basvuruFormuRepository, OgrenciRepository ogrenciRepository,
                                   StajRepository stajRepository, SirketServiceImpl sirketService, SirketRepository sirketRepository,
                                   FileRepository fileRepository, BasvuruFormuRepo repo, UserService userService, SirketYetkilisiRepository sirketYetkilisiRepository){
        this.basvuruFormuRepository = basvuruFormuRepository;
        this.ogrenciRepository=ogrenciRepository;
        this.stajRepository=stajRepository;
        this.sirketService=sirketService;
        this.sirketRepository = sirketRepository;
        this.fileRepository = fileRepository;
        this.repo=repo;
        this.userService = userService;
        this.sirketYetkilisiRepository = sirketYetkilisiRepository;
    }

    @Override
    public List<BasvuruFormu> getBasvuru() {
        return basvuruFormuRepository.findAll();
    }

    @Override
    public BasvuruFormu saveBasvuruFormu(BasvuruFormu basvuruFormu) {
        Ogrenci ogrenci = new Ogrenci();

        var ogr = ogrenciRepository.findByMail(basvuruFormu.getOgrenci().getMail());
        if(ogr == null){

            ogrenci.setAd(basvuruFormu.getOgrenci().getAd());
            ogrenci.setSoyad(basvuruFormu.getOgrenci().getSoyad());
            ogrenci.setMail(basvuruFormu.getOgrenci().getMail());
            ogrenci.setSinif(basvuruFormu.getOgrenci().getSinif());
            ogrenci.setOgrno(basvuruFormu.getOgrenci().getOgrno());
            ogrenci.setTcno(basvuruFormu.getOgrenci().getTcno());
            ogrenci.setTelno(basvuruFormu.getOgrenci().getTelno());
            ogrenci.setUser(userService.getUserByName());

            basvuruFormu.setOgrenci(ogrenci);
        }

        if(ogr != null){
            basvuruFormu.setOgrenci(ogr);
        }


        Staj staj = new Staj();
        staj.setStajTuru(basvuruFormu.getStaj().getStajTuru());
        staj.setStajDevresi(basvuruFormu.getStaj().getStajDevresi());
        staj.setStajIcerigi(basvuruFormu.getStaj().getStajIcerigi());
        staj.setStajGunSayisi(basvuruFormu.getStaj().getStajGunSayisi());
        staj.setStajBaslangicTarihi(basvuruFormu.getStaj().getStajBaslangicTarihi());
        staj.setStajBitistarihi(basvuruFormu.getStaj().getStajBitistarihi());

        Sirket sirket = new Sirket();

        Sirket sirket1 = sirketRepository.findByVergino(basvuruFormu.getSirket().getVergino());

        if(sirket1 == null){
            sirket.setSirketAdi(basvuruFormu.getSirket().getSirketAdi());
            sirket.setSirketLokasyon(basvuruFormu.getSirket().getSirketLokasyon());
            sirket.setSirketNumara(basvuruFormu.getSirket().getSirketNumara());
            sirket.setSirketHizmetAlani(basvuruFormu.getSirket().getSirketHizmetAlani());
            sirket.setPersonelSayisi(basvuruFormu.getSirket().getPersonelSayisi());
            sirket.setEmail(basvuruFormu.getSirket().getEmail());
            sirket.setVergino(basvuruFormu.getSirket().getVergino());
            basvuruFormu.setSirket(sirket);
        }
        if(sirket1 != null){
            basvuruFormu.setSirket(sirket1);
        }

        basvuruFormu.setStaj(staj);


        if(ogrenci != null && staj !=null && basvuruFormu.getFile_id() != "" ){
            basvuruFormu.setStajDurumu(StajDurumu.OnayBekliyor);
        }

        if(basvuruFormu.getFile_id() == ""){
            basvuruFormu.setStajDurumu(StajDurumu.EksikBelgeli);
        }

        return basvuruFormuRepository.save(basvuruFormu);

    }

    @Override
    public List<BasvuruFormu> getBasvuruOgrenciId() {
        Optional<List<BasvuruFormu>> basvuruFormu = basvuruFormuRepository.findByOgrenci_id(ogrenciRepository.findByUser_id(userService.getUserByName().getId()).getId());
        if(basvuruFormu.isPresent()){
            return basvuruFormu.get();
        }
        return null;
    }

    @Override
    public BasvuruFormu getbasvuruOgrenciId(Long id) {
        BasvuruFormu basvuruFormu = basvuruFormuRepository.findbyOgrenci_id(id);

        return basvuruFormu;
    }

    @Override
    public BasvuruFormu updateBasvuru(Long id) {
        Optional<BasvuruFormu> resultBasvuruFormu = basvuruFormuRepository.findById(id);

        if(resultBasvuruFormu.isPresent()){
            resultBasvuruFormu.get().setStajDurumu(StajDurumu.Onaylandi);
            return basvuruFormuRepository.save(resultBasvuruFormu.get());
        }

        return null;
    }

    @Override
    public BasvuruFormu updateBasvuru2(Long id) {
        Optional<BasvuruFormu> resultBasvuruFormu = basvuruFormuRepository.findById(id);

        if(resultBasvuruFormu.isPresent()){
            resultBasvuruFormu.get().setStajDurumu(StajDurumu.Reddedildi);
            return basvuruFormuRepository.save(resultBasvuruFormu.get());
        }

        return null;
    }

    @Override
    public List<BasvuruFormu> getBasvuruSirketId() {
        List<BasvuruFormu> basvuruFormu = basvuruFormuRepository.findBySirket_sirket_id(sirketYetkilisiRepository.findByUser_id(userService.getUserByName().getId()).getSirket_id());
        return basvuruFormu;
    }

    @Override
    public List<BasvuruFormu> getBasvuruById(Long id) {
        List<BasvuruFormu> basvuruFormu = basvuruFormuRepository.findByid(id);
        return basvuruFormu;
    }

    @Override
    public List<BasvuruFormu> getAllBasvuruFormu(Integer pageNo, Integer pageSize) {
        Pageable paging = PageRequest.of(pageNo, pageSize);

        Page<BasvuruFormu> pagedResult = repo.findAll(paging);
        if (pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<BasvuruFormu>();

        }
    }

    @Override
    public List<BasvuruFormu> search(String keyword) {
        if (keyword != null){
            return basvuruFormuRepository.findByOgrenci_adContaining(keyword);
        }
        return null;
    }

    @Override
    public List<BasvuruFormu> sirala() {
        return basvuruFormuRepository.findByOrderByOgrenci_ogrnoAsc();
    }
    @Override
    public List<BasvuruFormu> sirala2() {
        return basvuruFormuRepository.findByOrderByOgrenci_ogrnoDesc();
    }

    @Override
    public List<BasvuruFormu> siralaAd() {
        return basvuruFormuRepository.findByOrderByOgrenci_adAsc();
    }

    @Override
    public List<BasvuruFormu> siralaStaj() {
        return basvuruFormuRepository.findByOrderByStaj_stajTuruDesc();
    }

    @Override
    public List<BasvuruFormu> siralaDurum() {
        return basvuruFormuRepository.findByOrderByStajDurumuAsc();
    }


}
