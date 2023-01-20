//package com.enumtech.SchoolApp.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.enumtech.SchoolApp.entity.Designation;
//import com.enumtech.SchoolApp.entity.Employee;
//import com.enumtech.SchoolApp.response.ResponseListOfEmployees;
//import com.enumtech.SchoolApp.response.ResponseSaveDesignation;
//import com.enumtech.SchoolApp.response.ResponseSaveEmployee;
//import com.enumtech.SchoolApp.service.DesignationService;
//import com.enumtech.SchoolApp.service.EmployeeService;
//
//@RestController
//@RequestMapping("/schoolapp")
//public class EmployeeController {
//
//	@Autowired
//	private DesignationService desgservice;
//
//	@Autowired
//	private EmployeeService empservice;
//
//	@RequestMapping("/registeremployee")
//	public ResponseSaveEmployee registerEmployee(@RequestParam("emp_name") String emp_name,
//			@RequestParam("father_name") String father_name, @RequestParam("dob") String dob,
//			@RequestParam("doj") String doj, @RequestParam("category") String category,
//			@RequestParam("designation") String designation, @RequestParam("address") String address,
//			@RequestParam("paddress") String paddress, @RequestParam("photo") String photo,
//			@RequestParam("mobile") String mobile, @RequestParam("email") String email,
//			@RequestParam("salary") double salary, @RequestParam("leave_bal") int leave_bal) {
//		ResponseSaveEmployee response = new ResponseSaveEmployee();
//
//		Employee emp = new Employee();
//		emp.setEmp_name(emp_name);
//		emp.setFather_name(father_name);
//		emp.setDob(dob);
//		emp.setDoj(doj);
//		emp.setCategory(category);
//		emp.setDesignation(designation);
//		emp.setAddress(address);
//		emp.setPaddress(paddress);
//		emp.setPhoto(photo);
//		emp.setMobile(mobile);
//		emp.setEmail(email);
//		emp.setSalary(salary);
//		emp.setLeave_bal(leave_bal);
//
//		try {
//			empservice.registerEmp(emp);
//			response.setMsg("Employee Registered Successfully");
//			response.setStatus(true);
//		} catch (Exception e) {
//		}
//		return response;
//
//	}
//	
//	@RequestMapping("/registerdesignation")
//	public ResponseSaveDesignation registerDesignation(@RequestParam("Desg_type") String Desg_type) {
//		ResponseSaveDesignation response = new ResponseSaveDesignation();
//		Designation desg = new Designation();
//		desg.setDesg_type(Desg_type);
//
//		try {
//			desgservice.registerDesg(desg);
//			response.setMsg("Designation created Successfully");
//			response.setStatus(true);
//		}
//
//		catch (Exception e) {
//		}
//		return response;
//
//	}
//
//	@RequestMapping("/getAllEmployees")
//	public ResponseListOfEmployees getAllEmployees() {
//		ResponseListOfEmployees emplist = new ResponseListOfEmployees();
//		List<Employee> emps;
//		emps = empservice.viewAllEmp();
//		emplist.setEmps(emps);
//		return (emplist);
//	}
//
//	@RequestMapping("/deleteempbyid")
//	public ResponseSaveEmployee deleteEmpById(@RequestParam("emp_id") int emp_id) {
//
//		ResponseSaveEmployee response = new ResponseSaveEmployee();
//		try {
//			empservice.deleteEmpById(emp_id);
//			response.setMsg("Record Deleted Successfully");
//			response.setStatus(true);
//		} catch (Exception e) {
//		}
//
//		return (response);
//	}
//
//	@RequestMapping("/getEmployeeByDesignation")
//	public ResponseListOfEmployees getEmployeeByDesignation(@RequestParam("designation") String designation) {
//		ResponseListOfEmployees emplist = new ResponseListOfEmployees();
//		List<Employee> emps;
//		emps = empservice.getEmployeeByDesignation(designation);
//		emplist.setEmps(emps);
//		return (emplist);
//	}
//
////	@RequestMapping("/getEmployeeByMobile")
////	public Employee getEmployeeByMobile(@RequestParam("mobile") String mobile) {
////		Employee e = new Employee();
////
////		e = empservice.getEmployeeByMobile(mobile);
////
////		return (e);
////	}
//
//	@RequestMapping("/getAllDesignation")
//	public List<Designation> getAllDesignation() {
//		List<Designation> desgs;
//		desgs = desgservice.viewAllDesgs();
//		return (desgs);
//	}
//}