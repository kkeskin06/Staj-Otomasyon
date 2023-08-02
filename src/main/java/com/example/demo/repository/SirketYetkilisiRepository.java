package com.example.demo.repository;

import com.example.demo.entity.SirketYetkilisi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SirketYetkilisiRepository extends JpaRepository<SirketYetkilisi,Long> {
}
