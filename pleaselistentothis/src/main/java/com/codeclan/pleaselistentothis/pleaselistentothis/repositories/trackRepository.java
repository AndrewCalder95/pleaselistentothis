package com.codeclan.pleaselistentothis.pleaselistentothis.repositories;

import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface trackRepository extends JpaRepository <Track, Long>{

    List<Track> findByUserId(long Id);

    List<Track> findTrackIdByReviewsId(long Id);

    @Query(value = "select distinct t.* " +
            "from tracks t " +
            "inner join reviews " +
            "on reviews.track_id = t.id " +
            "and reviews.user_id != ?1 " +
            "and t.user_id != ?1 " +
            "order by t.id desc ",nativeQuery = true)
    List<Track> discoverPage(long Id);

    @Query(value = "SELECT t.*" +
            "FROM tracks t " +
            "WHERE t.user_id != ?1 " +
            "AND t.id NOT IN ( SELECT track_id FROM reviews WHERE reviews.user_id = ?1 )", nativeQuery = true)
    List<Track> discoverPage2(long Id);

    @Query(value = "SELECT t.*" +
            "FROM tracks t " +
            "WHERE t.user_id = ?1 " +
            "AND t.user_id != ?2 " +
            "AND t.id NOT IN ( SELECT track_id FROM reviews WHERE reviews.user_id = ?2 )", nativeQuery = true)
    List<Track> reviewPage(long reviewerId, long userId);
}
