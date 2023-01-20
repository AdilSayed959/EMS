package com.enumtech.SchoolApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_id;
	
	@Column(name="user_password")
	private String user_password;

	@Column(name="user_role")
	private String user_role;
	
	@Column(name="user_email")
	private String user_email;
	
	
	

	public User(String user_password, String user_role, String user_email) {
		super();
		this.user_password = user_password;
		this.user_role = user_role;
		this.user_email = user_email;
	}

	public User() {
		// TODO Auto-generated constructor stub
	}

	public int getUser_id() {
		
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getUser_role() {
		return user_role;
	}

	public void setUser_role(String user_role) {
		this.user_role = user_role;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}
	
	
}
