package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "Sirket")
public class Sirket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sirket_id;
    private String sirketAdi;
    private BigDecimal PersonelSayisi;
    private String sirketLokasyon;
    private String email;
    private String vergino;
    private BigDecimal sirketNumara;
    private String sirketHizmetAlani;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "sirketYetkilisi_id")
    private SirketYetkilisi sirketYetkilisi;

}
