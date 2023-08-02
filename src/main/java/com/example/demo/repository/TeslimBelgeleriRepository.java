package com.example.demo.repository;

import com.example.demo.entity.BasvuruFormu;
import com.example.demo.entity.TeslimBelgeleri;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TeslimBelgeleriRepository extends JpaRepository<TeslimBelgeleri,Long> {

    Optional<List<TeslimBelgeleri>> findByOgrenci_id (Long id);

    @Query("SELECT r FROM TeslimBelgeleri r WHERE r.id = :id")
    Optional<List<TeslimBelgeleri>> findById2 (@Param("id") Long id);

    @Query("SELECT r FROM TeslimBelgeleri r WHERE r.ogrenci.ad LIKE %?1% OR r.ogrenci.ogrno LIKE %?1%")
    List<TeslimBelgeleri> findsearch(String keyword);

    List<TeslimBelgeleri> findByOrderByOgrenci_ogrnoAsc();

    List<TeslimBelgeleri> findByOrderByOgrenci_ogrnoDesc();

    List<TeslimBelgeleri> findByOrderByOgrenci_adAsc();

    List<TeslimBelgeleri> findByOrderByOgrenci_adDesc();

    List<TeslimBelgeleri> findByOrderByTeslimDurumuAsc();

    List<TeslimBelgeleri> findByOrderByTeslimDurumuDesc();

}
