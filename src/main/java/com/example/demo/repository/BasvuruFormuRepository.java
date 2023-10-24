package com.example.demo.repository;

import com.example.demo.entity.BasvuruFormu;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
public interface BasvuruFormuRepository extends JpaRepository<BasvuruFormu,Long> {

     Optional<List<BasvuruFormu>> findByOgrenci_id (Long id);


     List<BasvuruFormu> findByid(Long id);
     @Query("SELECT r FROM BasvuruFormu r WHERE r.ogrenci.id = :id")
     public BasvuruFormu findbyOgrenci_id (@Param("id") Long id);

     @Query("SELECT r FROM BasvuruFormu r WHERE r.sirket.sirket_id = :id")
    List<BasvuruFormu> findBySirket_sirket_id(@Param("id") Long id);


//     Optional<List<BasvuruFormu>> findBySirket_sirket_id(Long id);

     @Query("SELECT r FROM BasvuruFormu r WHERE r.ogrenci.ad LIKE %?1% OR r.ogrenci.ogrno LIKE %?1%")
     List<BasvuruFormu> findsearch(String keyword);

     List<BasvuruFormu> findByOrderByOgrenci_ogrnoAsc();

     List<BasvuruFormu> findByOrderByOgrenci_ogrnoDesc();

     List<BasvuruFormu> findByOrderByOgrenci_adAsc();

     List<BasvuruFormu> findByOrderByStaj_stajTuruDesc();

     List<BasvuruFormu> findByOrderByStajDurumuAsc();

}
