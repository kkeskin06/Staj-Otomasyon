package com.example.demo.repository;

import com.example.demo.entity.Ogrenci;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Optional;

@Repository
public interface OgrenciRepository extends JpaRepository<Ogrenci,Long> {


    public Ogrenci findByMail(String mail);


}
