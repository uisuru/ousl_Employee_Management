package me.isuruonline.ousl.apiemployee.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "parents")
public class Parent {

	private long id;
	private String firstName;
	private String lastName;
	private String employee;

	public Parent() {

	}

	public Parent(String firstName, String lastName, String employee) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.employee = employee;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "first_name", nullable = false)
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "last_name", nullable = false)
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Column(name = "employee", nullable = false)
	public String getEmployeeName() {
		return employee;
	}

	public void setEmployeeName(String employee) {
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "Parent [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", employee=" + employee
				+ "]";
	}

}
