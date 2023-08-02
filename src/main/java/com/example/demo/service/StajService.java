package com.example.demo.service;

import com.example.demo.entity.Staj;

import java.util.List;

public interface StajService {

    List<Staj> getStaj();

    public Staj savestaj(Staj staj);
}
