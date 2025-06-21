package com.bugtracker;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.Transactional;

import com.bugtracker.model.Issue;
import com.bugtracker.model.Project;
import com.bugtracker.model.User;
import com.bugtracker.repository.IssueRepository;
import com.bugtracker.repository.ProjectRepository;
import com.bugtracker.repository.UserRepository;

@SpringBootApplication
@EntityScan("com.bugtracker.model")
@EnableJpaRepositories("com.bugtracker.repository")
public class BugTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BugTrackerApplication.class, args);
    }

    @Bean
    @Transactional
    CommandLineRunner runner(UserRepository userRepo, ProjectRepository projectRepo, IssueRepository issueRepo) {
        return args -> {
            // Clean slate for repeatable runs during development
            issueRepo.deleteAll();
            projectRepo.deleteAll();
            userRepo.deleteAll();

            // Insert users
            User alice = new User();
            alice.setUsername("alice");
            alice.setEmail("alice@example.com");
            alice.setPassword("password");

            User bob = new User();
            bob.setUsername("bob");
            bob.setEmail("bob@example.com");
            bob.setPassword("password");

            userRepo.saveAll(Arrays.asList(alice, bob));
            System.out.println("✅ Users saved.");

            // Fetch persisted users
            User savedAlice = userRepo.findFirstByUsername("alice").orElseThrow();
            User savedBob = userRepo.findFirstByUsername("bob").orElseThrow();
            System.out.println("✅ Users reloaded.");

            // Create and save project
            Project project = new Project();
            project.setName("Bug Tracker Core");
            project.setDescription("Main project for issue tracking");
            projectRepo.save(project);
            Project savedProject = projectRepo.findAll().get(0);
            System.out.println("✅ Project saved.");

            // Insert issues
            Issue issue1 = new Issue();
            issue1.setTitle("Login not working");
            issue1.setDescription("Users cannot log in with valid credentials.");
            issue1.setPriority("High");
            issue1.setStatus("Open");
            issue1.setProject(savedProject);
            issue1.setAssignee(savedAlice);

            Issue issue2 = new Issue();
            issue2.setTitle("Dashboard loads slowly");
            issue2.setDescription("Dashboard takes 5 seconds to load.");
            issue2.setPriority("Medium");
            issue2.setStatus("In Progress");
            issue2.setProject(savedProject);
            issue2.setAssignee(savedBob);

            issueRepo.saveAll(Arrays.asList(issue1, issue2));
            System.out.println("✅ Issues inserted.");

            System.out.println("🌱 Sample data load complete.");
        };
    }
}
