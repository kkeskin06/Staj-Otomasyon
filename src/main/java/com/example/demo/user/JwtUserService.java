package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@CrossOrigin
public class JwtUserService {

    private final JwtUserRepository jwtUserRepository;

    public JwtUser save(JwtUser user){
        return jwtUserRepository.save(user);
    }

    public Optional<JwtUser> findJwtUserByEmail(String email) {
        return jwtUserRepository.findJwtUserByEmail(email);
    }

    public JwtUser getJwtUserByEmail(String email) {
        return jwtUserRepository.findJwtUserByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found by email!"));
    }

    public JwtUser getJwtUserByUsername(String username) {
        return jwtUserRepository.findJwtUserByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found by username!"));
    }

}
