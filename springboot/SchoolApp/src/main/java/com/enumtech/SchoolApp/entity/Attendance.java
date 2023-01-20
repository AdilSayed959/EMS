package com.enumtech.SchoolApp.entity;

import java.sql.Time;
//import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="attendance")
public class Attendance {
	
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private int att_id;
	
	@Column(name="date_of_att")
	private String date_of_att;
	
	@Column(name="emp_id")
	private int emp_id;
	
	@Column(name="intime")
	private Time intime;
	
	
	@Column(name="outtime")
	private Time outime;
	
	@Column(name="status")
	private String status;

	
	

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	public int getAtt_id() {
		return att_id;
	}

	public void setAtt_id(int att_id) {
		this.att_id = att_id;
	}

	
	public String getDate_of_att() {
		return date_of_att;
	}

	
	public void setDate_of_att(String date_of_att) {
		this.date_of_att = date_of_att;
	}

	public Time getIntime() {
		return intime;
	}

	public void setIntime(Time intime) {
		this.intime = intime;
	}

	public Time getOutime() {
		return outime;
	}

	public void setOutime(Time outime) {
		this.outime = outime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

	

}
