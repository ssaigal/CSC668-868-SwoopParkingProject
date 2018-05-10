package com.lostsemicolon.Swoop;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
public class User {

    private @Id @Column @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private @Column String userName;
    private String password;

    private User () {}

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
