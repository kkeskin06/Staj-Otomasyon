package com.example.demo.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Staj")
public class Staj {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Staj_id;

    @Enumerated(EnumType.STRING)
    private StajTuru stajTuru;

    private Integer StajDevresi;
    private String StajIcerigi;
    private Integer StajGunSayisi;
    private Date StajBaslangicTarihi;
    private Date StajBitistarihi;

}



