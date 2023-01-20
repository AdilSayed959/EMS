package com.enumtech.SchoolApp.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="designation")	
public class Designation implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int Desg_id;
	
	@Column(name="Desg_type")
	String Desg_type;
	
	public Designation() {}
	public Designation(String desg_type) {
		super();
		Desg_type = desg_type;
	}
	public int getDesg_id() {
		return Desg_id;
	}
	public void setDesg_id(int desg_id) {
		Desg_id = desg_id;
	}
	public String getDesg_type() {
		return Desg_type;
	}
	public void setDesg_type(String desg_type) {
		Desg_type = desg_type;
	}
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="desg_id",referencedColumnName="desg_id")
	List<Employee> emps;

	public List<Employee> getEmps() {
		return emps;
	}
	public void setEmps(List<Employee> emps) {
		this.emps = emps;
	}
	
}
