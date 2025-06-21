package com.bugtracker;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bugtracker.controller.AuthController;
import com.bugtracker.controller.UserController;
import com.bugtracker.repository.UserRepository;

@SpringBootTest
class BugTrackerApplicationTests {

    @Autowired
    private AuthController authController;

    @Autowired
    private UserController userController;

    @Autowired
    private UserRepository userRepository;

    @Test
    void contextLoads() {
        assertThat(authController).isNotNull();
        assertThat(userController).isNotNull();
    }

    @Test
    void userRepositoryShouldBeEmptyOrPopulated() {
        long count = userRepository.count();
        assertThat(count).isGreaterThanOrEqualTo(0); // verifies repo is injected and works
    }
}
