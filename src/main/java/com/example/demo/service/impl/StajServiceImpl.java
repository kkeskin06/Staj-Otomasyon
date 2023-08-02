package com.example.demo.service.impl;

import com.example.demo.entity.Staj;
import com.example.demo.repository.StajRepository;
import com.example.demo.service.StajService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StajServiceImpl implements StajService {

    private final StajRepository stajRepository;

    public StajServiceImpl(StajRepository stajRepository)
    {
        this.stajRepository = stajRepository;
    }


    @Override
    public List<Staj> getStaj() {
        return stajRepository.findAll();
    }

    @Override
    public Staj savestaj(Staj staj) {
        return stajRepository.save(staj);
    }
}
