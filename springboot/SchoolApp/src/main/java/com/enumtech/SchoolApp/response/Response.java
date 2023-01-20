package com.enumtech.SchoolApp.response;

import java.util.List;

import com.enumtech.SchoolApp.entity.User;

public class Response {

	
	private Boolean status;
	private String msg;
	public Response()
	{
		this.status=false;
		this.msg="record not inserted";
	}
	
	
	public Response(Boolean status, String msg) {
		super();
		this.status = status;
		this.msg = msg;
	}


	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}

}
