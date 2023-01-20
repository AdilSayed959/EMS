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
@Table(name="department")	
public class Department implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int dno;
	
	@Column(name="dname")
	String dname;
	
	public Department() {}
	public Department(String dname) {
		super();
		this.dname = dname;
	}
	
	
	public int getDept_id() {
		return dno;
	}
	public void setDept_id(int dno) {
		this.dno = dno;
	}
	public String getDept_type() {
		return dname;
	}
	public void setDept_type(String dname) {
		this.dname = dname;
	}


	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="dno",referencedColumnName="dno")
	List<Employee> emps;

	public List<Employee> getEmps() {
		return emps;
	}
	public void setEmps(List<Employee> emps) {
		this.emps = emps;
	}
	
}
