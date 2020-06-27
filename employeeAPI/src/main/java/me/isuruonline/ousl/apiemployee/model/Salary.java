package me.isuruonline.ousl.apiemployee.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "salary")
public class Salary {

	private long id;
	private String name;

	public Salary() {

	}

	public Salary(String name) {
		this.name = name;
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
	public String getName() {
		return name;
	}

	public void setName(String firstName) {
		this.name = firstName;
	}

	@Override
	public String toString() {
		return "Salary [id=" + id + ", name=" + name + "]";
	}

}
