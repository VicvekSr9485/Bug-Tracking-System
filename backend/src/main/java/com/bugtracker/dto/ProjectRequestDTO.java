package com.bugtracker.dto;

public class ProjectRequestDTO {
    private String name;
    private String description;

    public String getName() { return name; }
    public String getDescription() { return description; }

    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
}
