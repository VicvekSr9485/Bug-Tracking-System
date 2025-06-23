package com.bugtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bugtracker.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
