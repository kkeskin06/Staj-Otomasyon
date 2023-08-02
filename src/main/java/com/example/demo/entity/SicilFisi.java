package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "SicilFisi")
public class SicilFisi {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "calismaAlani")
    private String calismaAlani;

    @Column(name = "calisilanGunSayisi")
    private Integer calisilanGunSayisi;

    @Column(name = "calisilmayanGunSayisi")
    private Integer calisilmayanGunSayisi;

    @Column(name = "iseDevamPuani")
    private Character iseDevamPuani;

    @Column(name = "genelTavirveHareket")
    private Character genelTavirveHareket;

    @Column(name = "calismaveGayret")
    private Character calismaveGayret;

    @Column(name = "isiVaktindeYapma")
    private Character isiVaktindeYapma;

    @Column(name = "iscilereTavirveHareket")
    private Character iscilereTavirveHareket;

}
