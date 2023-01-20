package com.enumtech.SchoolApp.entity;

import java.util.List;

import javax.persistence.CascadeType;

//import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int emp_id;

	@Column(name = "emp_name")
	String emp_name;

	@Column(name = "father_name")
	String father_name;

	@Column(name = "dob")
	String dob;

	@Column(name = "doj")
	String doj;

	@Column(name = "dno")
	int dno;

	@Column(name = "designation")
	String designation;

	@Column(name = "address")
	String address;

	@Column(name = "paddress")
	String paddress;

	@Column(name = "photo")
	String photo;

	@Column(name = "mobile")
	String mobile;

	@Column(name = "email")
	String email;

	@Column(name = "salary")
	double salary;

	@Column(name = "leave_bal")
	int leave_bal;
	
	@Column(name = "category")
	String category;

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Employee() {
	}

	public Employee(String emp_name, String father_name, String dob, String doj, int dno, String designation,
			String address, String paddress, String photo, String mobile, String email, double salary, int leave_bal) {
		super();
		this.emp_name = emp_name;
		this.father_name = father_name;
		this.dob = dob;
		this.doj = doj;
		this.dno = dno;
		this.designation = designation;
		this.address = address;
		this.paddress = paddress;
		this.photo = photo;
		this.mobile = mobile;
		this.email = email;
		this.salary = salary;
		this.leave_bal = leave_bal;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}

	public String getEmp_name() {
		return emp_name;
	}

	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}

	public String getFather_name() {
		return father_name;
	}

	public void setFather_name(String father_name) {
		this.father_name = father_name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getDoj() {
		return doj;
	}

	public void setDoj(String doj) {
		this.doj = doj;
	}

	public int getDno() {
		return dno;
	}

	public void setDno(int dno) {
		this.dno = dno;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPaddress() {
		return paddress;
	}

	public void setPaddress(String paddress) {
		this.paddress = paddress;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public int getLeave_bal() {
		return leave_bal;
	}

	public void setLeave_bal(int leave_bal) {
		this.leave_bal = leave_bal;
	}

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "emp_id", referencedColumnName = "emp_id")
	List<Attendance> emps;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "emp_id", referencedColumnName = "emp_id")
	List<Leave> leaves;

}
