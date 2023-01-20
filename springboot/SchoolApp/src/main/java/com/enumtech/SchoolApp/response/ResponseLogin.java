package com.enumtech.SchoolApp.response;

public class ResponseLogin {
	private boolean status;
	private String msg;
	private String user_role;
	private String user_password;
	
	public ResponseLogin()
	{
		this.status = false;
		this.msg = "Failed";
		this.user_role = "user";
		this.user_password = "test";
	}
	public ResponseLogin(boolean status, String msg, String user_role, String user_password) {
		super();
		this.status = status;
		this.msg = msg;
		this.user_role = user_role;
		this.user_password = user_password;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getUser_role() {
		return user_role;
	}
	public void setUser_role(String user_role) {
		this.user_role = user_role;
	}
	
}
