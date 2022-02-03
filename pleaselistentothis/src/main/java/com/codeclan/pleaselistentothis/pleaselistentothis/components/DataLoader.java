package com.codeclan.pleaselistentothis.pleaselistentothis.components;


import com.codeclan.pleaselistentothis.pleaselistentothis.models.*;
import com.codeclan.pleaselistentothis.pleaselistentothis.repositories.RoleRepository;
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

    @Autowired
    RoleRepository roleRepository;

    public void run(ApplicationArguments args) {

        Role role1 = new Role(RoleName.ROLE_USER);
        roleRepository.save(role1);
        Role role2 = new Role(RoleName.ROLE_ADMIN);
        roleRepository.save(role2);

        User user1 = new User("ADMIN", "ADMIN", "Andrew Calder", "ADMIN", "$2a$10$H2wLImCAkegh//IezMtwSuKeTXEnTiErWJOnfgdYLXo/YxpaKzgUq");
        userRepository.save(user1);

        Track track1 = new Track("Make Me Love", "https://soundcloud.com/andrewcaldermusic/make-me-love","Is this too long?", user1);
        trackRepository.save(track1);

        Track track2 = new Track("In The End", "https://soundcloud.com/andrewcaldermusic/in-the-end","Not sure about this one", user1);
        trackRepository.save(track2);

        Track track3 = new Track("F for You", "https://soundcloud.com/disclosuremusic/f-for-you-totally-enormous-1", "Is there too much high end?", user1);
        trackRepository.save(track3);

        Track track4 = new Track("Take Me In (Let Me Go)", "https://soundcloud.com/andrewcaldermusic/take-me-in-let-me-go","What do you think about the ending?", user1);
        trackRepository.save(track4);

        Track track5 = new Track("Do It Right", "https://soundcloud.com/andrewcaldermusic/do-it-right", "Is this too repetitive?", user1);
        trackRepository.save(track5);


        Review review1 = new Review("good job", user1, track1);
        reviewRepository.save(review1);

        Review review2 = new Review("nice", user1, track2);
        reviewRepository.save(review2);

        Review review3 = new Review("good", user1, track3);
        reviewRepository.save(review3);


    }
}
