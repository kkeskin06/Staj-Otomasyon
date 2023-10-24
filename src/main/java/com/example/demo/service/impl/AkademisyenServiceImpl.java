package com.example.demo.service.impl;

import com.example.demo.entity.Akademisyen;
import com.example.demo.repository.AkademisyenRepository;
import com.example.demo.security.service.UserService;
import com.example.demo.service.AkademisyenService;
import org.springframework.stereotype.Service;

@Service
public class AkademisyenServiceImpl implements AkademisyenService {

    private final AkademisyenRepository akademisyenRepository;

    private final UserService userService;
    public AkademisyenServiceImpl (AkademisyenRepository akademisyenRepository, UserService userService){
        this.akademisyenRepository = akademisyenRepository;
        this.userService = userService;
    }


    @Override
    public Akademisyen getByUserId() {
        return akademisyenRepository.findByUser_id(userService.getUserByName().getId());
    }
}
