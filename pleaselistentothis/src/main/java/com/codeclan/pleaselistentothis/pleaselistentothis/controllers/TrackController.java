package com.codeclan.pleaselistentothis.pleaselistentothis.controllers;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.Review;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.User;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.userRepository;
import com.codeclan.pleaselistentothis.pleaselistentothis.services.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class TrackController {

    @Autowired
    com.codeclan.pleaselistentothis.pleaselistentothis.repositories.trackRepository trackRepository;

    @Autowired
    userRepository userRepository;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @GetMapping(value = "/tracks")
    public ResponseEntity<List<Track>> getAllTracks(@RequestHeader MultiValueMap<String, String> headers) {
        //System.out.println("TOKEN: " +  headers.get("authorization"));
        String jwtToken = headers.get("authorization").get(0).replaceAll("Bearer ","");
        Long userId = tokenProvider.getUserIdFromJWT(jwtToken);
//            headers.forEach((key, value) -> {
//                System.out.println(String.format(
//                        "Header1 '%s' = %s", key, value.stream().collect(Collectors.joining("|"))));
//            });

        return new ResponseEntity<>(trackRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/track/{id}")
    public ResponseEntity<Optional<Track>> getUser(@PathVariable Long id){
        return new ResponseEntity<>(trackRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/tracks/{id}")
    public ResponseEntity<List<Track>> getTracksByUser(@PathVariable Long id){
        return new ResponseEntity<>(trackRepository.findByUserId(id), HttpStatus.OK);
    }

    @GetMapping(value = "/track/reviews/{id}")
    public ResponseEntity<List<Track>> getTracksByReviewId(@PathVariable Long Id){
        return new ResponseEntity<>(trackRepository.findTrackIdByReviewsId(Id), HttpStatus.OK);
    }

    @GetMapping(value = "/track/discover/{id}")
    public ResponseEntity<List<Track>> discoverPage(@PathVariable Long id){
        return new ResponseEntity<>(trackRepository.discoverPage2(id), HttpStatus.OK);
    }

    @GetMapping(value = "/track/discover/{reviewerid}/{userid}")
    public ResponseEntity<List<Track>> reviewPage(@PathVariable Long reviewerid, @PathVariable Long userid){
        return new ResponseEntity<>(trackRepository.reviewPage(reviewerid, userid), HttpStatus.OK);
    }

    @GetMapping(value = "/tracksbyuser")
    public ResponseEntity<List<Track>> getTracksByUser(@RequestHeader MultiValueMap<String, String> headers){
        //@RequestParam(name= "id") long id){
        String jwtToken = headers.get("authorization").get(0).replaceAll("Bearer ","");
        Long userId = tokenProvider.getUserIdFromJWT(jwtToken);
        return new ResponseEntity<>(trackRepository.findByUserId(userId), HttpStatus.OK);
    }



    @PostMapping(value = "/tracks")
    public ResponseEntity<Track> postTrack(@RequestBody Track track, @RequestHeader MultiValueMap<String, String> headers) {
        String jwtToken = headers.get("authorization").get(0).replaceAll("Bearer ", "");
        Long userId = tokenProvider.getUserIdFromJWT(jwtToken);
        Optional<User> user = userRepository.findById(userId);
        track.setUser(user.get());
        trackRepository.save(track);
        return new ResponseEntity<>(track, HttpStatus.CREATED);
    }


}
