package com.example.demo.service;

import com.example.demo.entity.BasvuruFormu;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface BasvuruFormuService {

    List<BasvuruFormu> getBasvuru();
    public BasvuruFormu saveBasvuruFormu(BasvuruFormu basvuruFormu);

    List<BasvuruFormu>  getBasvuruOgrenciId();

    public BasvuruFormu getbasvuruOgrenciId(Long id);

    public BasvuruFormu updateBasvuru(Long id );

    public BasvuruFormu updateBasvuru2(Long id );

    List<BasvuruFormu>  getBasvuruSirketId();

    List<BasvuruFormu> getBasvuruById(Long id);

    List<BasvuruFormu> getAllBasvuruFormu(Integer pageNo, Integer pageSize);

    List<BasvuruFormu> search(String keyword);

    List<BasvuruFormu> sirala();

    List<BasvuruFormu> sirala2();

    List<BasvuruFormu> siralaAd();

    List<BasvuruFormu> siralaStaj();

    List<BasvuruFormu> siralaDurum();
}
