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

import com.bugtracker.dto.IssueRequestDTO;
import com.bugtracker.dto.IssueResponseDTO;
import com.bugtracker.model.Issue;
import com.bugtracker.model.Project;
import com.bugtracker.model.User;
import com.bugtracker.repository.IssueRepository;
import com.bugtracker.repository.ProjectRepository;
import com.bugtracker.repository.UserRepository;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = "*")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<IssueResponseDTO> getAllIssues() {
        return issueRepository.findAll().stream().map(issue -> new IssueResponseDTO(
                issue.getId(),
                issue.getTitle(),
                issue.getDescription(),
                issue.getStatus(),
                issue.getPriority(),
                issue.getProject() != null ? issue.getProject().getId() : null,
                issue.getProject() != null ? issue.getProject().getName() : null,
                issue.getAssignee() != null ? issue.getAssignee().getId() : null,
                issue.getAssignee() != null ? issue.getAssignee().getUsername() : null
        )).toList();
    }

    @PostMapping
    public IssueResponseDTO createIssue(@RequestBody IssueRequestDTO dto) {
        Issue issue = new Issue();
        issue.setTitle(dto.getTitle());
        issue.setDescription(dto.getDescription());
        issue.setPriority(dto.getPriority());
        issue.setStatus(dto.getStatus());

        Project project = projectRepository.findById(dto.getProjectId()).orElseThrow();
        User assignee = userRepository.findById(dto.getAssigneeId()).orElseThrow();

        issue.setProject(project);
        issue.setAssignee(assignee);
        issue = issueRepository.save(issue);

        return new IssueResponseDTO(
            issue.getId(), issue.getTitle(), issue.getDescription(), issue.getStatus(), issue.getPriority(),
            project.getId(), project.getName(),
            assignee.getId(), assignee.getUsername()
        );
    }

    @PutMapping("/{id}")
    public IssueResponseDTO updateIssue(@PathVariable Long id, @RequestBody IssueRequestDTO dto) {
        Issue issue = issueRepository.findById(id).orElseThrow();
        issue.setTitle(dto.getTitle());
        issue.setDescription(dto.getDescription());
        issue.setPriority(dto.getPriority());
        issue.setStatus(dto.getStatus());

        Project project = projectRepository.findById(dto.getProjectId()).orElseThrow();
        User assignee = userRepository.findById(dto.getAssigneeId()).orElseThrow();

        issue.setProject(project);
        issue.setAssignee(assignee);
        issue = issueRepository.save(issue);

        return new IssueResponseDTO(
            issue.getId(), issue.getTitle(), issue.getDescription(), issue.getStatus(), issue.getPriority(),
            project.getId(), project.getName(),
            assignee.getId(), assignee.getUsername()
        );
    }

    @DeleteMapping("/{id}")
    public void deleteIssue(@PathVariable Long id) {
        issueRepository.deleteById(id);
    }
}
