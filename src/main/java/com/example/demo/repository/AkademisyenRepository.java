package com.example.demo.repository;

import com.example.demo.entity.Akademisyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AkademisyenRepository extends JpaRepository<Akademisyen,Long> {

}
