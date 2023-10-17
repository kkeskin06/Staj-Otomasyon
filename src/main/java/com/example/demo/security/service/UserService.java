package com.example.demo.security.service;

import com.example.demo.security.domain.Role;
import com.example.demo.security.domain.User;
import com.example.demo.security.domain.repository.RoleRepository;
import com.example.demo.security.domain.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final AuthenticationFacade authenticationFacade;

    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, RoleRepository roleRepository, AuthenticationFacade authenticationFacade, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.authenticationFacade = authenticationFacade;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(User user) {
        Role role = roleRepository.findByName("Sirket");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setUsername(user.getUsername());
        user.setRoles(userRoles);
        user.setActive(true);
        user.setPassword(getEncodedPassword(user.getPassword()));

        return userRepository.save(user);

//        String username = user.getUsername().toLowerCase(); // Kullanıcı adını küçük harflere çevirin
//        Role role = null;
//
//        if (username.startsWith("ogr.")) {
//            role = roleRepository.findByName("Ogrenci");
//        } else if (username.startsWith("akd.")) {
//            role = roleRepository.findByName("Akademisyen");
//        } else {
//            // Belirli bir başlangıç önekine sahip olmayan kullanıcılar için varsayılan bir rol atayabilirsiniz.
//            // Örneğin, "ogr." veya "akd." ile başlamayan kullanıcılar için "Varsayılan" rolünü atayabilirsiniz.
//            role = roleRepository.findByName("Varsayılan");
//        }
//
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(role);
//
//        user.setRoles(userRoles);
//        user.setActive(true);
//        user.setPassword(getEncodedPassword(user.getPassword()));
//
//        return userRepository.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public String currentUser(){
       return authenticationFacade.getName();
    }

    public User getUserByName(){
        return userRepository.findByUsername(authenticationFacade.getName());
    }
}
