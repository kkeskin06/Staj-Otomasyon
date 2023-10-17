package com.example.demo.repository;

import com.example.demo.entity.Ogrenci;
import com.example.demo.entity.Sirket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SirketRepository extends JpaRepository<Sirket,Long> {


    public Sirket findByEmail(String email);

    public Sirket findByVergino(String vergino);

    @Query("SELECT r FROM Sirket r WHERE r.sirketYetkilisi.id = :id")
    public Sirket findBySirketYetkilisi(@Param("id") Long id);

    public Sirket findBySirketYetkilisi_id(Long id);

}
