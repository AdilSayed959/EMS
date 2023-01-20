package com.enumtech.SchoolApp.response;

public class LeaveResponse {
	
	private boolean status;
	private String msg;
	
	public LeaveResponse()
	{
		this.status=false;
		this.msg="record not inserted";
	}
	
	public LeaveResponse(boolean status, String msg) {
		super();
		this.status = status;
		this.msg = msg;
	}

	public boolean getStatus() {
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
