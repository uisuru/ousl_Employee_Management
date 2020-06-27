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
import me.isuruonline.ousl.apiemployee.model.Supervisor;
import me.isuruonline.ousl.apiemployee.repository.SupervisorRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class SupervisorController {
	@Autowired
	private SupervisorRepository supervisorRepository;
	
	@GetMapping("/supervisors")
	public List<Supervisor> getAllSupervisors() {
		return supervisorRepository.findAll();
	}

	@GetMapping("/supervisors/{id}")
	public ResponseEntity<Supervisor> getSupervisorById(@PathVariable(value = "id") Long supervisorId)
			throws ResourceNotFoundException {
		Supervisor supervisor = supervisorRepository.findById(supervisorId)
				.orElseThrow(() -> new ResourceNotFoundException("Supervisor not found for this id :: " + supervisorId));
		return ResponseEntity.ok().body(supervisor);
	}

	@PostMapping("/supervisors")
	public Supervisor createSupervisor(@Valid @RequestBody Supervisor supervisor) {
		return supervisorRepository.save(supervisor);
	}

	@PutMapping("/supervisors/{id}")
	public ResponseEntity<Supervisor> updateSupervisor(@PathVariable(value = "id") Long supervisorId,
			@Valid @RequestBody Supervisor supervisorDetails) throws ResourceNotFoundException {
		Supervisor supervisor = supervisorRepository.findById(supervisorId)
				.orElseThrow(() -> new ResourceNotFoundException("Supervisor not found for this id :: " + supervisorId));

		supervisor.setName(supervisorDetails.getName());
		final Supervisor updatedSupervisor = supervisorRepository.save(supervisor);
		return ResponseEntity.ok(updatedSupervisor);
	}

	@CrossOrigin
	@DeleteMapping("/supervisors/{id}")
	public Map<String, Boolean> deleteSupervisor(@PathVariable(value = "id") Long supervisorId)
			throws ResourceNotFoundException {
		Supervisor supervisor = supervisorRepository.findById(supervisorId)
				.orElseThrow(() -> new ResourceNotFoundException("Supervisor not found for this id :: " + supervisorId));

		supervisorRepository.delete(supervisor);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
