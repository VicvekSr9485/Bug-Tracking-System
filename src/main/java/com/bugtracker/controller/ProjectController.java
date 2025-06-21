package com.bugtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bugtracker.dto.ProjectRequestDTO;
import com.bugtracker.dto.ProjectResponseDTO;
import com.bugtracker.model.Project;
import com.bugtracker.repository.ProjectRepository;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping
    public List<ProjectResponseDTO> getAllProjects() {
        return projectRepository.findAll().stream()
                .map(p -> new ProjectResponseDTO(p.getId(), p.getName(), p.getDescription()))
                .toList();
    }

    @GetMapping("/{id}")
    public ProjectResponseDTO getProjectById(@PathVariable Long id) {
        Project p = projectRepository.findById(id).orElseThrow();
        return new ProjectResponseDTO(p.getId(), p.getName(), p.getDescription());
    }

    @PostMapping
    public ProjectResponseDTO createProject(@RequestBody ProjectRequestDTO dto) {
        Project p = new Project();
        p.setName(dto.getName());
        p.setDescription(dto.getDescription());
        projectRepository.save(p);
        return new ProjectResponseDTO(p.getId(), p.getName(), p.getDescription());
    }

    @PutMapping("/{id}")
    public ProjectResponseDTO updateProject(@PathVariable Long id, @RequestBody ProjectRequestDTO dto) {
        Project p = projectRepository.findById(id).orElseThrow();
        p.setName(dto.getName());
        p.setDescription(dto.getDescription());
        p = projectRepository.save(p);
        return new ProjectResponseDTO(p.getId(), p.getName(), p.getDescription());
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectRepository.deleteById(id);
    }
}
