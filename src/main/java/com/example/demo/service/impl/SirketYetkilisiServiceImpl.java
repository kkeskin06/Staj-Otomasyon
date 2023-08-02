package com.example.demo.service.impl;

import com.example.demo.repository.SirketYetkilisiRepository;
import com.example.demo.service.SirketYetkilisiService;
import org.springframework.stereotype.Service;

@Service
public class SirketYetkilisiServiceImpl implements SirketYetkilisiService {

    private final SirketYetkilisiRepository sirketYetkilisiRepository;

    public SirketYetkilisiServiceImpl(SirketYetkilisiRepository sirketYetkilisiRepository){
        this.sirketYetkilisiRepository = sirketYetkilisiRepository;
    }

}
