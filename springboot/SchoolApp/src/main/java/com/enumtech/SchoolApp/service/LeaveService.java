package com.enumtech.SchoolApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enumtech.SchoolApp.entity.Leave;
import com.enumtech.SchoolApp.repository.LeaveRepository;

@Service("LeaveService")
public class LeaveService {
	
	@Autowired
	private LeaveRepository repository;
	
	public void registerLeave(Leave l) {
		// TODO Auto-generated method stub
		 repository.save(l);
		
	}

	public List<Leave> getAllLeave() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	public List<Leave> leaveByMobile(String mobile) {
		// TODO Auto-generated method stub
		return repository.leaveByMobile(mobile);
	}
	
	public List<Leave> leaveByName(String fname) {
		// TODO Auto-generated method stub
		return repository.leaveByName(fname);
	}

	public List<Leave> leaveByEmpId(int emp_id) {
		// TODO Auto-generated method stub
		return repository.leaveById(emp_id);
	}
}
