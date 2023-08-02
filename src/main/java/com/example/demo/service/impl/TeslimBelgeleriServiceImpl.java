package com.example.demo.service.impl;

import com.example.demo.entity.*;
import com.example.demo.repository.SicilFisiRepository;
import com.example.demo.repository.TeslimBelgeleriRepository;
import com.example.demo.service.BasvuruFormuService;
import com.example.demo.service.TeslimBelgeleriService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeslimBelgeleriServiceImpl implements TeslimBelgeleriService {

    private final TeslimBelgeleriRepository teslimBelgeleriRepository;
    private final BasvuruFormuService basvuruFormuService;

    private final SicilFisiRepository sicilFisiRepository;


    public TeslimBelgeleriServiceImpl(TeslimBelgeleriRepository teslimBelgeleriRepository,BasvuruFormuService basvuruFormuService,
                                      SicilFisiRepository sicilFisiRepository){
        this.teslimBelgeleriRepository = teslimBelgeleriRepository;
        this.basvuruFormuService = basvuruFormuService;
        this.sicilFisiRepository = sicilFisiRepository;
    }


    @Override
    public List<TeslimBelgeleri> getTeslimBelgeleri() {
        return teslimBelgeleriRepository.findAll();
    }

    @Override
    public Optional<List<TeslimBelgeleri>> getTeslimBelgeleriById(Long id) {

        return teslimBelgeleriRepository.findById2(id);
    }

    @Override
    public List<TeslimBelgeleri> getTeslimBelgeleriByOgrenci_id(Long id) {

        Optional<List<TeslimBelgeleri>> ogrenciteslimbelgeleri = teslimBelgeleriRepository.findByOgrenci_id(id);
        if(ogrenciteslimbelgeleri.isPresent()){
            return ogrenciteslimbelgeleri.get();
        }
        return null;
    }

    @Override
    public TeslimBelgeleri saveTeslimBelgeleri(TeslimBelgeleri teslimBelgeleri,Long id) {

        Ogrenci ogrenci = new Ogrenci();

        var basvuru = basvuruFormuService.getbasvuruOgrenciId(id);

        ogrenci.setId(basvuru.getOgrenci().getId());
        ogrenci.setAd(basvuru.getOgrenci().getAd());
        ogrenci.setSoyad(basvuru.getOgrenci().getSoyad());
        ogrenci.setMail(basvuru.getOgrenci().getMail());
        ogrenci.setTelno(basvuru.getOgrenci().getTelno());
        ogrenci.setSinif(basvuru.getOgrenci().getSinif());
        ogrenci.setTcno(basvuru.getOgrenci().getTcno());
        ogrenci.setOgrno(basvuru.getOgrenci().getOgrno());

        teslimBelgeleri.setOgrenci(ogrenci);

        Staj staj = new Staj();

        staj.setStaj_id(basvuru.getStaj().getStaj_id());
        staj.setStajBaslangicTarihi(basvuru.getStaj().getStajBaslangicTarihi());
        staj.setStajBitistarihi(basvuru.getStaj().getStajBitistarihi());
        staj.setStajIcerigi(basvuru.getStaj().getStajIcerigi());
        staj.setStajTuru(basvuru.getStaj().getStajTuru());
        staj.setStajDevresi(basvuru.getStaj().getStajDevresi());
        staj.setStajGunSayisi(basvuru.getStaj().getStajGunSayisi());

        teslimBelgeleri.setStaj(staj);
        if(teslimBelgeleri.getSicilfisipdf() == null){
            teslimBelgeleri.setTeslimDurumu(TeslimDurumu.SicilFisiOnayiBekliyor);
        }

        teslimBelgeleri.setHafta1(teslimBelgeleri.getHafta1());
        teslimBelgeleri.setHafta2(teslimBelgeleri.getHafta2());
        teslimBelgeleri.setHafta3(teslimBelgeleri.getHafta3());
        teslimBelgeleri.setHafta4(teslimBelgeleri.getHafta4());

        return teslimBelgeleriRepository.save(teslimBelgeleri);
    }

    @Override
    public Optional<TeslimBelgeleri> saveSicilFisi(SicilFisi sicilFisi, Long id) {
        SicilFisi sicilFisinew = new SicilFisi();

        sicilFisinew.setCalismaAlani(sicilFisi.getCalismaAlani());
        sicilFisinew.setCalisilanGunSayisi(sicilFisi.getCalisilanGunSayisi());
        sicilFisinew.setCalisilmayanGunSayisi(sicilFisi.getCalisilmayanGunSayisi());
        sicilFisinew.setCalismaveGayret(sicilFisi.getCalismaveGayret());
        sicilFisinew.setIseDevamPuani(sicilFisi.getIseDevamPuani());
        sicilFisinew.setGenelTavirveHareket(sicilFisi.getGenelTavirveHareket());
        sicilFisinew.setIscilereTavirveHareket(sicilFisi.getIscilereTavirveHareket());
        sicilFisinew.setIsiVaktindeYapma(sicilFisi.getIsiVaktindeYapma());

        TeslimBelgeleri belge  = teslimBelgeleriRepository.findById(id).orElse(null);
        belge.setSicilFisi(sicilFisinew);

        teslimBelgeleriRepository.save(belge);

        return null;
    }

    @Override
    public List<TeslimBelgeleri> search(String keyword) {
        if (keyword != null){
            return teslimBelgeleriRepository.findsearch(keyword);
        }

        return null;
    }

    @Override
    public TeslimBelgeleri onayTeslimBelgeleri(Long id) {
        Optional<TeslimBelgeleri> result = teslimBelgeleriRepository.findById(id);

        if(result.isPresent()){
            result.get().setTeslimDurumu(TeslimDurumu.Onaylandi);
            return teslimBelgeleriRepository.save(result.get());
        }
        return null;
    }

    @Override
    public TeslimBelgeleri redTeslimBelgeleri(Long id) {
        Optional<TeslimBelgeleri> result = teslimBelgeleriRepository.findById(id);

        if(result.isPresent()){
            result.get().setTeslimDurumu(TeslimDurumu.Reddedildi);
            return teslimBelgeleriRepository.save(result.get());
        }
        return null;
    }

    @Override
    public List<TeslimBelgeleri> siralaNo() {
        return teslimBelgeleriRepository.findByOrderByOgrenci_ogrnoAsc();
    }

    @Override
    public List<TeslimBelgeleri> siralaNoDesc() {
        return teslimBelgeleriRepository.findByOrderByOgrenci_ogrnoDesc();
    }

    @Override
    public List<TeslimBelgeleri> siralaAd() {
        return teslimBelgeleriRepository.findByOrderByOgrenci_ogrnoAsc();
    }

    @Override
    public List<TeslimBelgeleri> siralaAdDesc() {
        return teslimBelgeleriRepository.findByOrderByOgrenci_adDesc();
    }

    @Override
    public List<TeslimBelgeleri> siralaDurum() {
        return teslimBelgeleriRepository.findByOrderByTeslimDurumuAsc();
    }

    @Override
    public List<TeslimBelgeleri> siralaDurumDesc() {
        return teslimBelgeleriRepository.findByOrderByTeslimDurumuDesc();
    }


}
