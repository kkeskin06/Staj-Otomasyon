package com.example.demo.security.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE,
            },mappedBy = "roles")
    private Set<User> users = new HashSet<>();

//    @ManyToMany(fetch = FetchType.LAZY,
//            cascade = {
//                    CascadeType.PERSIST,
//                    CascadeType.MERGE,
//            })
//    @JoinTable(name ="Role_Permission",
//            joinColumns = { @JoinColumn(name = "role_id") },
//            inverseJoinColumns = { @JoinColumn(name = "permission_id") })
//    @JsonIgnore
//    private Set<Permission> permissions = new HashSet<>();
}
