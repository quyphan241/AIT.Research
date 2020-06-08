package com.example.demo.Model;

import javax.persistence.*;

@Entity
@Table(name = "experience")
public class WorkExperience {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String position;
    private String period;
    private boolean isDeleted=false;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
