package com.example.demo.service.impl;

import com.example.demo.entity.Sirket;
import com.example.demo.repository.SirketRepository;
import com.example.demo.service.SirketService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SirketServiceImpl implements SirketService {

    private final SirketRepository sirketRepository;

    public SirketServiceImpl(SirketRepository sirketRepository){
        this.sirketRepository = sirketRepository;
    }

    @Override
    public List<Sirket> getSirket(){
        return sirketRepository.findAll();
    }

    @Override
    public Sirket getSirketBySirketYetkilisi(Long id) {
        return sirketRepository.findBySirketYetkilisi(id);
    }
}
