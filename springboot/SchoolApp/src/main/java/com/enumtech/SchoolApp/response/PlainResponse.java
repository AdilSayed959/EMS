package com.enumtech.SchoolApp.response;


public class PlainResponse {
	
	private String status;
	private String msg;


	public PlainResponse()
	{
		this.status="present";
		this.msg="not inserted";
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getMsg() {
		return msg;
	}


	public void setMsg(String msg) {
		this.msg = msg;
	}


	public PlainResponse(String status, String msg) {
		super();
		this.status = status;
		this.msg = msg;
	}
	
	

	

}
