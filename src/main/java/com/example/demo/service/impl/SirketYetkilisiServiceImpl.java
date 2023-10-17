package com.example.demo.service.impl;

import com.example.demo.entity.SirketYetkilisi;
import com.example.demo.repository.SirketYetkilisiRepository;
import com.example.demo.security.domain.User;
import com.example.demo.security.service.UserService;
import com.example.demo.service.SirketYetkilisiService;
import org.springframework.stereotype.Service;

@Service
public class SirketYetkilisiServiceImpl implements SirketYetkilisiService {

    private final SirketYetkilisiRepository sirketYetkilisiRepository;

    private final UserService userService;
    public SirketYetkilisiServiceImpl(SirketYetkilisiRepository sirketYetkilisiRepository, UserService userService){
        this.sirketYetkilisiRepository = sirketYetkilisiRepository;
        this.userService = userService;
    }

    @Override
    public SirketYetkilisi getByUserId() {
        return sirketYetkilisiRepository.findByUser_id(userService.getUserByName().getId());
    }
}
