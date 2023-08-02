package com.example.demo.service.impl;

import com.example.demo.repository.AkademisyenRepository;
import com.example.demo.service.AkademisyenService;
import org.springframework.stereotype.Service;

@Service
public class AkademisyenServiceImpl implements AkademisyenService {

    private final AkademisyenRepository akademisyenRepository;

    public AkademisyenServiceImpl (AkademisyenRepository akademisyenRepository){
        this.akademisyenRepository = akademisyenRepository;
    }


}
