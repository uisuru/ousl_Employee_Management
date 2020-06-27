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
import me.isuruonline.ousl.apiemployee.model.Salary;
import me.isuruonline.ousl.apiemployee.repository.SalaryRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class SalaryController {
	@Autowired
	private SalaryRepository salaryRepository;
	
	@GetMapping("/salarys")
	public List<Salary> getAllSalarys() {
		return salaryRepository.findAll();
	}

	@GetMapping("/salarys/{id}")
	public ResponseEntity<Salary> getSalaryById(@PathVariable(value = "id") Long salaryId)
			throws ResourceNotFoundException {
		Salary salary = salaryRepository.findById(salaryId)
				.orElseThrow(() -> new ResourceNotFoundException("Salary not found for this id :: " + salaryId));
		return ResponseEntity.ok().body(salary);
	}

	@PostMapping("/salarys")
	public Salary createSalary(@Valid @RequestBody Salary salary) {
		return salaryRepository.save(salary);
	}

	@PutMapping("/salarys/{id}")
	public ResponseEntity<Salary> updateSalary(@PathVariable(value = "id") Long salaryId,
			@Valid @RequestBody Salary salaryDetails) throws ResourceNotFoundException {
		Salary salary = salaryRepository.findById(salaryId)
				.orElseThrow(() -> new ResourceNotFoundException("Salary not found for this id :: " + salaryId));

		salary.setName(salaryDetails.getName());
		final Salary updatedSalary = salaryRepository.save(salary);
		return ResponseEntity.ok(updatedSalary);
	}

	@CrossOrigin
	@DeleteMapping("/salarys/{id}")
	public Map<String, Boolean> deleteSalary(@PathVariable(value = "id") Long salaryId)
			throws ResourceNotFoundException {
		Salary salary = salaryRepository.findById(salaryId)
				.orElseThrow(() -> new ResourceNotFoundException("Salary not found for this id :: " + salaryId));

		salaryRepository.delete(salary);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
