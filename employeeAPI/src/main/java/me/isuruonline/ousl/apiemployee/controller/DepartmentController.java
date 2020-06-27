package me.isuruonline.ousl.apiemployee.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.isuruonline.ousl.apiemployee.exception.ResourceNotFoundException;
import me.isuruonline.ousl.apiemployee.model.Department;
import me.isuruonline.ousl.apiemployee.repository.DepartmentRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class DepartmentController {
	@Autowired
	private DepartmentRepository departmentRepository;
	
	@GetMapping("/departments")
	public List<Department> getAllDepartments() {
		return departmentRepository.findAll();
	}

	@GetMapping("/departments/{id}")
	public ResponseEntity<Department> getDepartmentById(@PathVariable(value = "id") Long departmentId)
			throws ResourceNotFoundException {
		Department department = departmentRepository.findById(departmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + departmentId));
		return ResponseEntity.ok().body(department);
	}

	@PostMapping("/departments")
	public Department createDepartment(@Valid @RequestBody Department department) {
		return departmentRepository.save(department);
	}

	@PutMapping("/departments/{id}")
	public ResponseEntity<Department> updateDepartment(@PathVariable(value = "id") Long departmentId,
			@Valid @RequestBody Department departmentDetails) throws ResourceNotFoundException {
		Department department = departmentRepository.findById(departmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + departmentId));

		department.setName(departmentDetails.getName());
		final Department updatedDepartment = departmentRepository.save(department);
		return ResponseEntity.ok(updatedDepartment);
	}

	@CrossOrigin
	@DeleteMapping("/departments/{id}")
	public Map<String, Boolean> deleteDepartment(@PathVariable(value = "id") Long departmentId)
			throws ResourceNotFoundException {
		Department department = departmentRepository.findById(departmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Department not found for this id :: " + departmentId));

		departmentRepository.delete(department);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
