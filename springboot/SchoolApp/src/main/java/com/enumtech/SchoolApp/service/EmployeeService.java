package com.enumtech.SchoolApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enumtech.SchoolApp.entity.Employee;
import com.enumtech.SchoolApp.repository.EmployeeRepo;


@Service("EmployeeService")
public class EmployeeService {
	
	@Autowired
	private EmployeeRepo emprepo;
	
	public void registerEmp(Employee emp) {
		// TODO Auto-generated method stub
		emprepo.save(emp);
	}

	public List<Employee> viewAllEmp() {
		// TODO Auto-generated method stub
		return (emprepo.findAll());
	}

	public void deleteEmpById(int emp_id) {
		// TODO Auto-generated method stub
		emprepo.delete(emp_id);
	}

	public List<Employee> getEmployeeByDesignation(String designation) {
		// TODO Auto-generated method stub
		
		return (emprepo.getEmployeeByDesignation(designation));
	}
	
	public Employee getEmployeeByMobile(String mobile) {
		// TODO Auto-generated method stub
		
		return (emprepo.getEmployeeByMobile(mobile));
	}

	public Employee getEmployeeByName(String emp_name) {
		// TODO Auto-generated method stub
		return (emprepo.getEmployeeByName(emp_name));
	}

	public Employee getEmployeeById(int emp_id) {
		// TODO Auto-generated method stub
		return emprepo.findOne(emp_id);
	}
	
	public List<String> getAllEmails()
	{
		return emprepo.getAllEmails();
	}

	public List<String> getAllMobiles() {
		// TODO Auto-generated method stub
		return emprepo.getAllMobiles();
	}

	public String mobileValidate(String mobile) {
		// TODO Auto-generated method stub
		return emprepo.mobileValidate(mobile);
	}

	public String emailValidate(String email) {
		// TODO Auto-generated method stub
		return emprepo.emailValidate(email);
	}

}
