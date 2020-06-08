package com.example.demo.Repository;

import com.example.demo.Model.WorkExperience;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkExperienceRepository extends CrudRepository<WorkExperience, Long> {
}
