package com.bugtracker.dto;

public class IssueResponseDTO {
    private Long id;
    private String title;
    private String description;
    private String status;
    private String priority;
    private Long projectId;
    private String projectName;
    private Long assigneeId;
    private String assigneeUsername;

    public IssueResponseDTO(Long id, String title, String description, String status, String priority,
                            Long projectId, String projectName, Long assigneeId, String assigneeUsername) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.projectId = projectId;
        this.projectName = projectName;
        this.assigneeId = assigneeId;
        this.assigneeUsername = assigneeUsername;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getStatus() { return status; }
    public String getPriority() { return priority; }
    public Long getProjectId() { return projectId; }
    public String getProjectName() { return projectName; }
    public Long getAssigneeId() { return assigneeId; }
    public String getAssigneeUsername() { return assigneeUsername; }
}
