package com.example.demo.entity;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;


import javax.persistence.*;

@Entity
@Data
@Table(name = "BasvuruFormu")
public class BasvuruFormu {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "ogrenci_id")
    private Ogrenci ogrenci;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "staj_staj_id")
    private Staj staj;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "sirket_sirket_id")
    private Sirket sirket;

    @Column(name = "file_id")
    private String file_id;

    @Enumerated(EnumType.STRING)
    private StajDurumu stajDurumu;






}
