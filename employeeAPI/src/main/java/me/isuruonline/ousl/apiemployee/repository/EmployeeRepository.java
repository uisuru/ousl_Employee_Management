package me.isuruonline.ousl.apiemployee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.isuruonline.ousl.apiemployee.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
