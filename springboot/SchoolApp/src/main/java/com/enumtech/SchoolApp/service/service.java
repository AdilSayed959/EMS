package com.enumtech.SchoolApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enumtech.SchoolApp.entity.Attendance;
import com.enumtech.SchoolApp.entity.Leave;
import com.enumtech.SchoolApp.repository.AttdRepository;
import com.enumtech.SchoolApp.response.PlainResponse;

@Service("AttdService")
public class service {
	
	@Autowired
	private AttdRepository repository;

	public Attendance registerAttd(Attendance attd) {
		// TODO Auto-generated method stub
		return repository.save(attd);
	}


	public List<Attendance> getAllAttendance() {
		// TODO Auto-generated method stub
		
		return repository.findAll();
	}

	public List<Attendance> getAttendById(int emp_id) {
		// TODO Auto-generated method stub
		return repository.getAttendById(emp_id);
	}

	public List<Attendance> getAttendByMobile(String mobile) {
		// TODO Auto-generated method stub
		return (repository.getAttByMobile(mobile));
	}

	public List<Attendance> getAttendByName(String emp_name) {
		// TODO Auto-generated method stub
		return repository.getAttByName(emp_name);
	}

}
