package com.codeclan.pleaselistentothis.pleaselistentothis.controllers;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.Review;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.User;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.reviewRepository;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.trackRepository;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.userRepository;
import com.codeclan.pleaselistentothis.pleaselistentothis.services.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {

    @Autowired
    reviewRepository reviewRepository;

    @Autowired
    userRepository userRepository;

    @Autowired
    JwtTokenProvider tokenProvider;

    @GetMapping(value = "/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<Optional<Review>> getUser(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/reviews")
    public ResponseEntity<Review> postReview(@RequestBody Review review,  @RequestHeader MultiValueMap<String, String> headers) {
        String jwtToken = headers.get("authorization").get(0).replaceAll("Bearer ", "");
        Long userId = tokenProvider.getUserIdFromJWT(jwtToken);
        Optional<User> user = userRepository.findById(userId);
        review.setUser(user.get());
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }
    
}
