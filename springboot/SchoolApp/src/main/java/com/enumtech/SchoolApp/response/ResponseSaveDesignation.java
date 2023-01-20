package com.enumtech.SchoolApp.response;

public class ResponseSaveDesignation {

	private boolean status;
	private String msg;
	
	
	public ResponseSaveDesignation() {
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
