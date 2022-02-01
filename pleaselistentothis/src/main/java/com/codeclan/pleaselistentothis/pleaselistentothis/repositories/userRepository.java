package com.codeclan.pleaselistentothis.pleaselistentothis.repositories;

import com.codeclan.pleaselistentothis.pleaselistentothis.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
