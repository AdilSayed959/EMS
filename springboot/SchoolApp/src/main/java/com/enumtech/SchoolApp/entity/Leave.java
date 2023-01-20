package com.enumtech.SchoolApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="leavetable")
public class Leave {
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private int leave_id;
	
	@Transient
	@Column(name="emp_id")
	private int emp_id;
	
	@Column(name="leave_type")
	private String leave_type;
	
	@Column(name="fdate")
	private String fdate;
	
	@Column(name="tdate")
	private String tdate;
	
	@Column(name="total_days")
	private int total_days;
	
	@Column(name="description")
	private String description;

	
	public Leave() {}
	public Leave(int emp_id,String leave_type, String fdate, String tdate, int total_days, String description) {
		super();
		this.emp_id = emp_id;
		this.leave_type = leave_type;
		this.fdate = fdate;
		this.tdate = tdate;
		this.total_days = total_days;
		this.description = description;
	}

	public int getLeave_id() {
		return leave_id;
	}

	public void setLeave_id(int leave_id) {
		this.leave_id = leave_id;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}

	public String getLeave_type() {
		return leave_type;
	}

	public void setLeave_type(String leave_type) {
		this.leave_type = leave_type;
	}

	public String getFdate() {
		return fdate;
	}

	public void setFdate(String fdate) {
		this.fdate = fdate;
	}

	public String getTdate() {
		return tdate;
	}

	public void setTdate(String tdate) {
		this.tdate = tdate;
	}

	public int getTotal_days() {
		return total_days;
	}

	public void setTotal_days(int total_days) {
		this.total_days = total_days;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
		

}
