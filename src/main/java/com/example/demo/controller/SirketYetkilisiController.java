package com.example.demo.controller;

import com.example.demo.entity.SirketYetkilisi;
import com.example.demo.service.impl.SirketYetkilisiServiceImpl;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sirketyetkilisi")
public class SirketYetkilisiController {

    private final SirketYetkilisiServiceImpl sirketYetkilisiService;

    public SirketYetkilisiController(SirketYetkilisiServiceImpl sirketYetkilisiService) {
        this.sirketYetkilisiService = sirketYetkilisiService;
    }


}
