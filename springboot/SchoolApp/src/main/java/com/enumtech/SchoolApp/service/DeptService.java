package com.enumtech.SchoolApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enumtech.SchoolApp.repository.DepartmentRepo;

@Service("DeptService")
public class DeptService {

	@Autowired
	private DepartmentRepo deptrepo;
	
	
}
