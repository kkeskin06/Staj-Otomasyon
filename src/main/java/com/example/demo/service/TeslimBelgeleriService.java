package com.example.demo.service;


import com.example.demo.entity.SicilFisi;
import com.example.demo.entity.TeslimBelgeleri;

import java.util.List;
import java.util.Optional;

public interface TeslimBelgeleriService {

    List<TeslimBelgeleri> getTeslimBelgeleri();

    Optional<List<TeslimBelgeleri>> getTeslimBelgeleriById(Long id);

    List<TeslimBelgeleri> getTeslimBelgeleriByOgrenci_id(Long id);

    public TeslimBelgeleri saveTeslimBelgeleri(TeslimBelgeleri teslimBelgeleri,Long id);

    public Optional<TeslimBelgeleri> saveSicilFisi(SicilFisi sicilFisi, Long id);

    List<TeslimBelgeleri> search(String keyword);

    public TeslimBelgeleri onayTeslimBelgeleri(Long id);

    public TeslimBelgeleri redTeslimBelgeleri(Long id);

    List<TeslimBelgeleri> siralaNo();

    List<TeslimBelgeleri> siralaNoDesc();

    List<TeslimBelgeleri> siralaAd();

    List<TeslimBelgeleri> siralaAdDesc();

    List<TeslimBelgeleri> siralaDurum();

    List<TeslimBelgeleri> siralaDurumDesc();

}
