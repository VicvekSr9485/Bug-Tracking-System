package com.bugtracker.dto;

import jakarta.validation.constraints.NotNull;

public class IssueRequestDTO {
    private String title;
    private String description;
    private String status;
    private String priority;
    @NotNull
    private Long assigneeId;
    @NotNull
    private Long projectId;

    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getStatus() { return status; }
    public String getPriority() { return priority; }
    public Long getAssigneeId() { return assigneeId; }
    public Long getProjectId() { return projectId; }

    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setStatus(String status) { this.status = status; }
    public void setPriority(String priority) { this.priority = priority; }
    public void setAssigneeId(Long assigneeId) { this.assigneeId = assigneeId; }
    public void setProjectId(Long projectId) { this.projectId = projectId; }
}
