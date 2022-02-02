package com.codeclan.pleaselistentothis.pleaselistentothis.controllers;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.trackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TrackController {

    @Autowired
    com.codeclan.pleaselistentothis.pleaselistentothis.repositories.trackRepository trackRepository;

    @GetMapping(value = "/tracks")
    public ResponseEntity<List<Track>> getAllTracks(){
        return new ResponseEntity<>(trackRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/track/{id}")
    public ResponseEntity<Optional<Track>> getUser(@PathVariable Long id){
        return new ResponseEntity<>(trackRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/tracksbyuser")
    public ResponseEntity<List<Track>> getTracksByUser(@RequestParam(name= "id") long id){
        return new ResponseEntity<>(trackRepository.findByUserId(id), HttpStatus.OK);
    }


}
