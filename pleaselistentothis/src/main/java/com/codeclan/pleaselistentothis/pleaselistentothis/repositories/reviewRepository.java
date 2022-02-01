package com.codeclan.pleaselistentothis.pleaselistentothis.repositories;

import com.codeclan.pleaselistentothis.pleaselistentothis.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface reviewRepository extends JpaRepository <Review, Long>{
}
