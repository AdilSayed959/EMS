package com.enumtech.SchoolApp.response;

public class ResponseSaveEmployee {
	private boolean status;
	private String msg;
	
	
	public ResponseSaveEmployee() {
		super();
		this.status = false;
		this.msg ="Failed";
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
	

}
