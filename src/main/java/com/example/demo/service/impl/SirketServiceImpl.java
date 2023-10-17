package com.example.demo.service.impl;

import com.example.demo.entity.Sirket;
import com.example.demo.repository.SirketRepository;
import com.example.demo.service.SirketService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SirketServiceImpl implements SirketService {

    private final SirketRepository sirketRepository;

    private final SirketYetkilisiServiceImpl sirketYetkilisiService;
    public SirketServiceImpl(SirketRepository sirketRepository, SirketYetkilisiServiceImpl sirketYetkilisiService){
        this.sirketRepository = sirketRepository;
        this.sirketYetkilisiService = sirketYetkilisiService;
    }

    @Override
    public List<Sirket> getSirket(){
        return sirketRepository.findAll();
    }

    @Override
    public Sirket getSirketBySirketYetkilisi() {

        return sirketRepository.findBySirketYetkilisi_id(sirketYetkilisiService.getByUserId().getId());
    }
}
