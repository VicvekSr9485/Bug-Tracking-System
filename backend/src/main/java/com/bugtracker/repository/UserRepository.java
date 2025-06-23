package com.bugtracker.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bugtracker.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByUsername(String username);  // safer than findByUsername, avoids NonUniqueResultException
}
