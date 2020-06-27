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
import me.isuruonline.ousl.apiemployee.model.Parent;
import me.isuruonline.ousl.apiemployee.repository.ParentRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ParentController {
	@Autowired
	private ParentRepository parentRepository;

	@CrossOrigin
	@GetMapping("/parents")
	public List<Parent> getAllParents() {
		return parentRepository.findAll();
	}

	@CrossOrigin
	@GetMapping("/parents/{id}")
	public ResponseEntity<Parent> getParentById(@PathVariable(value = "id") Long parentId)
			throws ResourceNotFoundException {
		Parent parent = parentRepository.findById(parentId)
				.orElseThrow(() -> new ResourceNotFoundException("Parent not found for this id :: " + parentId));
		return ResponseEntity.ok().body(parent);
	}

	@CrossOrigin
	@PostMapping("/parents")
	public Parent createParent(@Valid @RequestBody Parent parent) {
		return parentRepository.save(parent);
	}

	@CrossOrigin
	@PutMapping("/parents/{id}")
	public ResponseEntity<Parent> updateParent(@PathVariable(value = "id") Long parentId,
			@Valid @RequestBody Parent parentDetails) throws ResourceNotFoundException {
		Parent parent = parentRepository.findById(parentId)
				.orElseThrow(() -> new ResourceNotFoundException("Parent not found for this id :: " + parentId));


		parent.setLastName(parentDetails.getLastName());
		parent.setFirstName(parentDetails.getFirstName());
		parent.setEmployeeName(parentDetails.getEmployeeName());
		final Parent updatedParent = parentRepository.save(parent);
		return ResponseEntity.ok(updatedParent);
	}

	@CrossOrigin
	@DeleteMapping("/parents/{id}")
	public Map<String, Boolean> deleteParent(@PathVariable(value = "id") Long parentId)
			throws ResourceNotFoundException {
		Parent parent = parentRepository.findById(parentId)
				.orElseThrow(() -> new ResourceNotFoundException("Parent not found for this id :: " + parentId));

		parentRepository.delete(parent);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
