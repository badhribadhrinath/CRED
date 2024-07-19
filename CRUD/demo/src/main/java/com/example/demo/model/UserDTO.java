package com.example.demo.model;

public class UserDTO {
    private String username;
    private String password;
    private String emailid;
    private String department;
    private String role;

    // Constructors (default and parameterized)
    public UserDTO() {
    }

    public UserDTO(String username, String password, String emailid, String department, String role) {
        this.username = username;
        this.password = password;
        this.emailid = emailid;
        this.department = department;
        this.role = role;
    }

    // Getters and setters for all fields
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    // Optional: Override toString() for debugging or logging purposes
    @Override
    public String toString() {
        return "UserDTO{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", emailid='" + emailid + '\'' +
                ", department='" + department + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
