package me.isuruonline.ousl.apiemployee.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	private long id;
	private String firstName;
	private String lastName;
	private String emailId;
	private String departmentid;
	private String supervisor;
	private String salary;
	private String details;

	public Employee() {

	}

	public Employee(String firstName, String lastName, String emailId, String departmentid, String supervisor,String salary, String details) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.departmentid = departmentid;
		this.supervisor = supervisor;
		this.salary = salary;
		this.details = details;
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

	@Column(name = "email_address", nullable = false)
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Column(name = "departmentid", nullable = false)
	public String getDepartmentid() {
		return departmentid;
	}

	public void setDepartmentid(String departmentid) {
		this.departmentid = departmentid;
	}
	@Column(name = "supervisor", nullable = false)
	public String getsupervisor() {
		return supervisor;
	}

	public void setsupervisor(String supervisor) {
		this.supervisor = supervisor;
	}
	@Column(name = "salary", nullable = false)
	public String getsalary() {
		return salary;
	}

	public void setsalary(String salary) {
		this.salary = salary;
	}
	@Column(name = "details", nullable = false)
	public String getdetails() {
		return details;
	}

	public void setdetails(String details) {
		this.details = details;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ ", departmentid=" + departmentid +", supervisor=" + supervisor +", salary=" + salary +", details=" + details + "]";
	}

}
