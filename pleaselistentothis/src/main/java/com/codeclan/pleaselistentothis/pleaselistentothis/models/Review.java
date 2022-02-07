package com.codeclan.pleaselistentothis.pleaselistentothis.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "reviewContent")
    private String reviewContent;

//    @Column(name = "handshake")
//    private Boolean handshake;

//    @ManyToOne
//    @JoinColumn(name = "reviewer_track_id")
////    @JsonIgnoreProperties({"reviews"})
//    private Track reviewerTrack;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"reviews"})
    private User user;

    @ManyToOne
    @JoinColumn(name = "track_id")
    @JsonIgnoreProperties({"reviews"})
    @JsonBackReference
    private Track track;



    public Review(String reviewContent, User user, Track track) {
        this.reviewContent = reviewContent;
        this.user = user;
//        this.reviewerTrack = reviewerTrack;
        this.track = track;
//        this.handshake = false;
    }


    public Review() {
    }

    public String getReviewContent() {
        return reviewContent;
    }

    public void setReviewContent(String reviewContent) {
        this.reviewContent = reviewContent;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Track getTrack() {
        return track;
    }

    public void setTrack(Track track) {
        this.track = track;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
