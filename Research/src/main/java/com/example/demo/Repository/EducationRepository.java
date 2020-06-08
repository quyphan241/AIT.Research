package com.example.demo.Repository;

import com.example.demo.Model.Education;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository  extends CrudRepository<Education,Long> {
}
