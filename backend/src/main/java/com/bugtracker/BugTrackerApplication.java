package com.bugtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.bugtracker.model")
@EnableJpaRepositories("com.bugtracker.repository")
public class BugTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BugTrackerApplication.class, args);
        System.out.println("✅ BugTracker backend started.");
    }
}
