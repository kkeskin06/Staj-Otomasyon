package com.example.demo.security.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {

    private User user;
    private String jwtToken;

    public JwtResponse(User user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }

}
