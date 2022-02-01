package com.codeclan.pleaselistentothis.pleaselistentothis.controllers;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.Review;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.reviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {

    @Autowired
    com.codeclan.pleaselistentothis.pleaselistentothis.repositories.reviewRepository reviewRepository;

    @GetMapping(value = "/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<Optional<Review>> getUser(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/reviews")
    public ResponseEntity<Review> postReview(@RequestBody Review review) {
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }
}
