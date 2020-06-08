package com.example.demo.Repository;

import com.example.demo.Model.Information;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InformationRepository extends CrudRepository<Information, Long> {
//    Iterable<Information> findAllByDeletedEquals(int isDeleted);
    List<Information> findAllByIsDeletedEquals(boolean isDeleted);
}
