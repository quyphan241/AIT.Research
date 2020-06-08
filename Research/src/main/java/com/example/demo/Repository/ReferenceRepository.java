package com.example.demo.Repository;

import com.example.demo.Model.Reference;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferenceRepository extends CrudRepository<Reference, Long> {
}
