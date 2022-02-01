package com.codeclan.pleaselistentothis.pleaselistentothis.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    private String secondName;

    @Column(name = "artist_name")
    private String artistName;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "interest_level")
    private interestLevel interest;

    @Column(name = "user_rating")
    private int userRating;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user")
    private List<Review> myReviews;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user")
    private List<Track> myTracks;

    @Transient
    private String passwordConfirm;


    public User() {
    }

    public User(String firstName, String secondName, String artistName, String username, String password, interestLevel interest, int userRating) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.artistName = artistName;
        this.username = username;
        this.password = password;
        this.interest = interest;
        this.userRating = userRating;
        this.myReviews = new ArrayList<Review>();
        this.myTracks = new ArrayList<Track>();
    }
//
//
//    basic login
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public interestLevel getInterest() {
        return interest;
    }

    public void setInterest(interestLevel interest) {
        this.interest = interest;
    }

    public int getUserRating() {
        return userRating;
    }

    public void setUserRating(int userRating) {
        this.userRating = userRating;
    }

    public List<Review> getMyReviews() {
        return myReviews;
    }

    public void setMyReviews(List<Review> myReviews) {
        this.myReviews = myReviews;
    }

    public List<Track> getMyTracks() {
        return myTracks;
    }

    public void setMyTracks(List<Track> myTracks) {
        this.myTracks = myTracks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public void addMyReviews (Review review){
        this.myReviews.add(review);
    }

    public void addTracks (Track track){
        this.myTracks.add(track);
    }


    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }

}
