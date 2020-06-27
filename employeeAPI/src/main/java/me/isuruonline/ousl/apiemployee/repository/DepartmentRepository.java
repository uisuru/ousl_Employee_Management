package me.isuruonline.ousl.apiemployee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.isuruonline.ousl.apiemployee.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>{

}
