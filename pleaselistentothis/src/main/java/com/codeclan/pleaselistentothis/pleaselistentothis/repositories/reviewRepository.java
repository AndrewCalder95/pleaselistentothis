package com.codeclan.pleaselistentothis.pleaselistentothis.repositories;

import com.codeclan.pleaselistentothis.pleaselistentothis.models.Review;
import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface reviewRepository extends JpaRepository <Review, Long>{

    List<Review> findByUserId(long id);
    List<Review> findByTrackId(long id);


}
