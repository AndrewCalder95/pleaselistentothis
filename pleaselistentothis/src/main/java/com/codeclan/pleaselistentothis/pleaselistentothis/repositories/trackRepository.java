package com.codeclan.pleaselistentothis.pleaselistentothis.repositories;

import com.codeclan.pleaselistentothis.pleaselistentothis.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface trackRepository extends JpaRepository <Track, Long>{
}
