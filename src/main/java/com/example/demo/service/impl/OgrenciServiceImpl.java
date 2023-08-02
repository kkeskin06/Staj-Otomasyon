package com.example.demo.service.impl;

import com.example.demo.entity.Ogrenci;
import com.example.demo.repository.OgrenciRepository;
import com.example.demo.service.OgrenciService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OgrenciServiceImpl implements OgrenciService {

    private final OgrenciRepository ogrenciRepository;

    public OgrenciServiceImpl (OgrenciRepository ogrenciRepository){
        this.ogrenciRepository = ogrenciRepository;
    }

    @Override
    public Ogrenci saveogrenci(Ogrenci ogrenci) {
        return ogrenciRepository.save(ogrenci);
    }
    @Override
    public Ogrenci getOgrenci(Long id) {
       Optional<Ogrenci> ogrenci = ogrenciRepository.findById(id);
       if(ogrenci.isPresent()){
           return ogrenci.get();

       }
       return null;
    }

    @Override
    public List<Ogrenci> getAll() {
        return ogrenciRepository.findAll();
    }
    //Dependency Injection

}
