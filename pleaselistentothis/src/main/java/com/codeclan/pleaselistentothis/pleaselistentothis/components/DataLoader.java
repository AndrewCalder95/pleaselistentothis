package com.codeclan.pleaselistentothis.pleaselistentothis.components;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.Review;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.User;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.interestLevel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    com.codeclan.pleaselistentothis.pleaselistentothis.repositories.reviewRepository reviewRepository;

    @Autowired
    com.codeclan.pleaselistentothis.pleaselistentothis.repositories.userRepository userRepository;

    @Autowired
    com.codeclan.pleaselistentothis.pleaselistentothis.repositories.trackRepository trackRepository;

    public void run(ApplicationArguments args) {

        User user1 = new User("user1", "$2a$10$SHLKXUyQ/.o070.8xYwg4.3i56JKmcq2o5YtokpbdoX.TnXPFP1Mm");
        User user2 = new User("user2", "mypassword");
        userRepository.save(user1);
        userRepository.save(user2);

        Track track1 = new Track("Make Me Love", "www.hjksahf.com", user1);
        trackRepository.save(track1);

        Track track2 = new Track("In The End", "www.hjksahf.com", user1);
        trackRepository.save(track2);

        Track track3 = new Track("F for You", "www.hjksahf.com", user2);
        trackRepository.save(track3);


        Review review1 = new Review("good job", user2, track1);
        reviewRepository.save(review1);

        Review review2 = new Review("nice", user2, track2);
        reviewRepository.save(review2);

        Review review3 = new Review("good", user1, track3);
        reviewRepository.save(review3);


        user1.setArtistName("Andrew Calder");
        user1.setFirstName("Andrew");
        user1.setSecondName("Calder");
        user1.setInterest(interestLevel.hobbyist);
        userRepository.save(user1);

    }
}
