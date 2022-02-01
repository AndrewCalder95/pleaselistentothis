package com.codeclan.pleaselistentothis.pleaselistentothis.controllers;

import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class AppController {

    @Autowired
    userRepository userRepo;


    @RequestMapping("/home")
    public String goHome() {
        return "index";
    }




}
