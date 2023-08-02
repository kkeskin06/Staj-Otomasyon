package com.example.demo.service;


import com.example.demo.entity.Ogrenci;

import java.util.List;
import java.util.Optional;

public interface OgrenciService {
    public Ogrenci saveogrenci(Ogrenci ogrenci);

    public Ogrenci getOgrenci(Long id);

    public List<Ogrenci> getAll();
}
