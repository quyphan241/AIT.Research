package com.example.demo.Model;

import javax.persistence.*;
@Entity
@Table(name = "education")
public class Education {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String school;
    private String position;
    private String period;
    private String description;
    private boolean isDeleted=false;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
