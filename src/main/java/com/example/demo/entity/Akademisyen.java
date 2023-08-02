package com.example.demo.entity;


import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Akademisyen")
public class Akademisyen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "akademisyen_id")
    private Long akademisyen_id;

    @Column(name = "akademisye_adi")
    private String akademisye_adi;

    @Column(name = "akademisyen_soyadi")
    private String akademisyen_soyadi;

    @Column(name = "akademisyen_mail")
    private String akademisyen_mail;
}
