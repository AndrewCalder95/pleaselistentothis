package com.codeclan.pleaselistentothis.pleaselistentothis.controllers;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.User;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.trackRepository;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.userRepository;
import com.codeclan.pleaselistentothis.pleaselistentothis.services.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;

import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    userRepository userRepository;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @GetMapping("/users")
    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepository.save(user);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping(value = "/currentuser")
    public ResponseEntity <Optional<User>> getUserById(@RequestHeader MultiValueMap<String, String> headers){
        String jwtToken = headers.get("authorization").get(0).replaceAll("Bearer ","");
        Long userId = tokenProvider.getUserIdFromJWT(jwtToken);
        return new ResponseEntity<>(userRepository.findById(userId), HttpStatus.OK);
    }


}