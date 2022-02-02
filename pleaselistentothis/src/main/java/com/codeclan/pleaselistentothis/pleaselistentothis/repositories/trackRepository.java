package com.codeclan.pleaselistentothis.pleaselistentothis.repositories;

import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface trackRepository extends JpaRepository <Track, Long>{

    List<Track> findByUserId(long id);
}
