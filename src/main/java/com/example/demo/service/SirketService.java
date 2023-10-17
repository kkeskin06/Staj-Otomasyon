package com.example.demo.service;

import com.example.demo.entity.Sirket;


import java.util.List;

public interface SirketService {

    List<Sirket> getSirket();

    Sirket getSirketBySirketYetkilisi();
}
