package com.example.demo.entity;


import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "Ogrenci")
public class Ogrenci {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String ad;

    private String soyad;

    private String mail;

    private Integer sinif;

    private BigDecimal tcno;

    private BigDecimal ogrno;

    private BigDecimal telno;

}
