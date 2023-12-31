package com.example.demo.security.domain.repository;

import com.example.demo.security.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Role findByName(String name);

}
