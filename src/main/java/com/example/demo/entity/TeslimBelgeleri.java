package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "TeslimBelgeleri")
public class TeslimBelgeleri {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String defterIcKapagi;

    private String defterSayfalari;

    private String stajRaporu;

    
    private String hafta1;

    private String hafta2;

    private String hafta3;

    private String hafta4;

    private String sicilfisipdf;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sicilFisi_id")
    private SicilFisi sicilFisi;

    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(name = "ogrenci_id")
    private Ogrenci ogrenci;

    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(name = "staj_staj_id")
    private Staj staj;


    @Enumerated(EnumType.STRING)
    private TeslimDurumu teslimDurumu;
}
