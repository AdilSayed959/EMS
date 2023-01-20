package com.enumtech.SchoolApp.controller;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.enumtech.SchoolApp.entity.Attendance;
import com.enumtech.SchoolApp.entity.Leave;
import com.enumtech.SchoolApp.response.LeaveResponse;
import com.enumtech.SchoolApp.response.PlainResponse;
import com.enumtech.SchoolApp.response.Response;
import com.enumtech.SchoolApp.service.LeaveService;
import com.enumtech.SchoolApp.service.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.enumtech.SchoolApp.entity.Designation;
import com.enumtech.SchoolApp.entity.Employee;
import com.enumtech.SchoolApp.entity.User;
import com.enumtech.SchoolApp.response.ResponseListOfEmployees;
import com.enumtech.SchoolApp.response.ResponseLogin;
import com.enumtech.SchoolApp.response.ResponseSaveDesignation;
import com.enumtech.SchoolApp.response.ResponseSaveEmployee;
import com.enumtech.SchoolApp.service.DeptService;
import com.enumtech.SchoolApp.service.DesignationService;
import com.enumtech.SchoolApp.service.EmployeeService;
import com.enumtech.SchoolApp.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/schoolapp")
public class AttdController {
	
	@Autowired
	private service serv;
	
	@Autowired
	private LeaveService service;
	
	@Autowired
	private DesignationService desgservice;
	
	@Autowired
	private EmployeeService empservice;
	
	@Autowired
	private UserService userservice;
	
	@Autowired
	private DeptService deptservice;
		
	
	@RequestMapping("/registeremployee")
	public ResponseSaveEmployee registerEmployee(
			@RequestParam("emp_name") String emp_name,
			@RequestParam("father_name") String father_name,
			@RequestParam("dob") String dob,
			@RequestParam("doj") String doj,
			@RequestParam("dno") int dno,
			@RequestParam("designation") String designation,
			@RequestParam("address") String address,
			@RequestParam("paddress") String paddress,
			@RequestParam("photo") String photo,
			@RequestParam("mobile") String mobile,
			@RequestParam("email") String email,
			@RequestParam("salary") double salary,
			@RequestParam("leave_bal") int leave_bal)
	{
		ResponseSaveEmployee response=new ResponseSaveEmployee();
		
		Employee emp=new Employee();
		emp.setEmp_name(emp_name);
		emp.setFather_name(father_name);
		emp.setDob(dob);
		emp.setDoj(doj);
		emp.setDno(dno);
		emp.setDesignation(designation);
		emp.setAddress(address);
		emp.setPaddress(paddress);
		emp.setPhoto(photo);
		emp.setMobile(mobile);
		emp.setEmail(email);
		emp.setSalary(salary);
		emp.setLeave_bal(leave_bal);
		
		try
		{
			empservice.registerEmp(emp);
			response.setMsg("Employee Registered Successfully");
			response.setStatus(true);
		}
		catch(Exception e) {}
		return response;
		
	}
	
	@RequestMapping("/getEmployeeById")
	public Employee getEmployeeById(@RequestParam("emp_id") int emp_id)
	{
		Employee e=new Employee();
		
		e=empservice.getEmployeeById(emp_id);
		
		return(e);
	}

	
//	@RequestMapping("/getEmployeeByMobile")
//	public Employee getEmployeeByMobile(@RequestParam("mobile") String mobile)
//	{
//		Employee e=new Employee();
//		
//		e=empservice.getEmployeeByMobile(mobile);
//		
//		return(e);
//	}
	
	@RequestMapping("/getEmployeeByName")
	public Employee getEmployeeByFirstName(@RequestParam("emp_name") String emp_name)
	{
		Employee e=new Employee();
		
		e=empservice.getEmployeeByName(emp_name);
		
		return(e);
	}

	@RequestMapping("/getEmployeeByDesignation")
	public ResponseListOfEmployees getEmployeeByDesignation(@RequestParam("designation") String designation)
	{
		ResponseListOfEmployees emplist=new ResponseListOfEmployees();
		List<Employee> emps;
		emps=empservice.getEmployeeByDesignation(designation);
		emplist.setEmps(emps);
		return(emplist);
	}
	

	@RequestMapping("/getAllEmployees")
	public ResponseListOfEmployees getAllEmployees()
	{
		ResponseListOfEmployees emplist=new ResponseListOfEmployees();
		List<Employee> emps;
		emps=empservice.viewAllEmp();
		emplist.setEmps(emps);
		return(emplist);
	}
	
	@RequestMapping("/deleteempbyid")
	public ResponseSaveEmployee deleteEmpById(@RequestParam("emp_id") int emp_id)
	{
		
		ResponseSaveEmployee response=new ResponseSaveEmployee();
		try
		{
		empservice.deleteEmpById(emp_id);
		response.setMsg("Record Deleted Successfully");
		response.setStatus(true);
		}catch(Exception e) {}
		
		return(response);
	}
	
	
	
	@RequestMapping("/registerdesignation")
	public ResponseSaveDesignation registerDesignation(
			@RequestParam("Desg_type") String Desg_type)
	{
		ResponseSaveDesignation response=new ResponseSaveDesignation();
		Designation desg=new Designation();
		desg.setDesg_type(Desg_type);
		
		try
		{
			desgservice.registerDesg(desg);
			response.setMsg("Designation created Successfully");
			response.setStatus(true);
		}
		
		catch(Exception e) {}
		return response;
		
	}
	
	
	@RequestMapping("/getAllDesignation")
	public List<Designation> getAllDesignation()
	{
		List<Designation> desgs;
		desgs=desgservice.viewAllDesgs();
		return(desgs);
	}
	
	@RequestMapping("/userlogin")
	public ResponseLogin loginUser(@RequestParam("user_id") int user_id,@RequestParam("user_password") String user_password) 
	{
		ResponseLogin response=new ResponseLogin();
		User u=new User();
		try
		{
			u=userservice.loginUser(user_id,user_password);
			if(u.getUser_id()==user_id && u.getUser_password().equals(user_password))
			{
			response.setMsg("Login Successful");
			response.setStatus(true);
			response.setUser_role(u.getUser_role());
			}
		}catch(Exception e) {}
		return response;
	}
	@RequestMapping("/userforgotpassword")
	public ResponseLogin forgotPassword(@RequestParam("email") String email)
	{
		ResponseLogin response=new ResponseLogin();
		User u=new User();
		try
		{
			u=userservice.forgotPassword(email);
			if(u.getUser_email().equals(email))
			{
			response.setMsg("Your Password has been  mailed to your registered Email");
			response.setStatus(true);
			response.setUser_password(u.getUser_password());
			}
		}catch(Exception e) {}
		return response;
	}
	
	//Nazish
	@RequestMapping("/registerAttd")
	public PlainResponse registerAttd(@RequestParam("emp_id")int emp_id ,@RequestParam("date_of_attd")String date_of_attd, @RequestParam("intime")Time intime,@RequestParam("outime")Time outime,@RequestParam("status")String status)
	{
		PlainResponse response=new PlainResponse();
		Attendance attd=new Attendance();
		
		attd.setDate_of_att(date_of_attd);
		attd.setIntime(intime);
		attd.setOutime(outime);
		attd.setStatus(status);
		try {
		serv.registerAttd(attd);
		response.setStatus("present");
		response.setMsg("inserted");
		}
		catch (Exception e) {}
		return response;
	}
	
	
	/*@RequestMapping("/deleteEmpById")
	public PlainResponse deleteEmpById(@RequestParam("emp_id")int emp_id )
	{
		PlainResponse response=new PlainResponse();
		response=serv.deleteEmpAttd(emp_id);
		response.setMsg("record deleted");
		return response;
	}*/
	
	@RequestMapping("/getAllAttd")
	public List<Attendance> getAllAttd()
	{
		List<Attendance> attendlist=new ArrayList<Attendance>();
		attendlist=serv.getAllAttendance();
		return attendlist;
	}
	
	@RequestMapping("/attendByMobile")
	public List<Attendance> attendById(@RequestParam("mobile")String mobile)
	{
		List<Attendance> attendlist=new ArrayList<Attendance>();
		attendlist=serv.getAttendByMobile(mobile);
		return attendlist;
	}
	
	@RequestMapping("/attendByName")
	public List<Attendance> attendByName(@RequestParam("emp_name")String emp_name )
	{
		List<Attendance> attendlist=new ArrayList<Attendance>();
		attendlist=serv.getAttendByName(emp_name);
		return attendlist;
	}
	

	
	
	
	@RequestMapping("/addLeave")
	public LeaveResponse addLeave(@RequestParam("emp_id") int emp_id,
			@RequestParam("leave_type") String leave_type, @RequestParam("fdate") String fdate,
			@RequestParam("tdate") String tdate, @RequestParam("total_days") int total_days,
			@RequestParam("description") String description) {
		LeaveResponse response = new LeaveResponse();
		Leave l = new Leave();
		
//		l.setEmp_id(emp_id);
		l.setLeave_type(leave_type);
		l.setFdate(fdate);
		l.setTdate(tdate);
		l.setTotal_days(total_days);
		l.setDescription(description);
		try {
			service.registerLeave(l);
			response.setStatus(true);
			response.setMsg("Leave Request Received");
			} catch (Exception e1) {}
		return response;
	}
	
//	@RequestMapping(value = "/addLeave",method = RequestMethod.POST)
//	public LeaveResponse addleave(@RequestBody Leave leave)
//	{
//		LeaveResponse leaveResponse = new LeaveResponse();
//		try
//		{
//		service.registerLeave(leave);
//		leaveResponse.setStatus(true);
//		leaveResponse.setMsg("leave added succesfully");
//		}
//		catch (Exception e) {
//			e.printStackTrace();
//		}
//		return leaveResponse;
//	}
	
	@RequestMapping("/getAllLeave")
	public List<Leave> getAllLeave(){
		List<Leave> leavelist=new ArrayList<Leave>();
		leavelist=service.getAllLeave();
		return leavelist;
		
	}
	
	@RequestMapping("/leaveByMobile")
	public List<Leave> leaveByMobile(String mobile){
		List<Leave> leavelist=new ArrayList<Leave>();
		leavelist=service.leaveByMobile(mobile);
		return leavelist;
		
		
	}
	
	@RequestMapping("/leaveByEmpName")
	public List<Leave> leaveByName(@RequestParam("fnam") String fnam){
		List<Leave> leavelist=new ArrayList<Leave>();
		leavelist=service.leaveByName(fnam);
		return leavelist;
	}
	
	@RequestMapping("/leaveByEmpId")
	public List<Leave> leaveByEmpId(@RequestParam("emp_id") int emp_id){
		List<Leave> leavelist=new ArrayList<Leave>();
		leavelist=service.leaveByEmpId(emp_id);
		return leavelist;
	}
	
	//Neha 
	
	
	
	@RequestMapping("/registerUser")
	public Response registerUser(@RequestParam("user_password") String password,
			@RequestParam("user_role")String role,@RequestParam("user_email")String email ) {
		
		Response res=new Response();
	    User u=new User();
		u.setUser_password(password);
		u.setUser_email(email);
		u.setUser_role(role);
		try {
			userservice.registerUser(u);
			res.setStatus(true);
			res.setMsg("record inserted");
			return res;
		} catch (Exception e) {
		}

		
		return res;	
		
	}


	
	
	@RequestMapping("/getAllUsers")
	public List<User> getAllUsers() {
		
		List<User> user=new ArrayList<User>();
		user=userservice.getall();
		return user;
		
	}
	 
   @RequestMapping("/searchUserById")  
     public User searchUserById(@RequestParam("user_id")int id)
     {
    	User u=new User();
    	u=userservice.searchId(id);
    	return u;
     }
   
   @RequestMapping("/searchUserByEmail")  
   public User searchUserById(@RequestParam("email")String email)
   {
  	User u=new User();
  	u=userservice.searchEmail(email);
  	return u;
   }
    
     
    @RequestMapping("/deleteUserById")
    public Response deleteUserById(@RequestParam("user_id")int userid)
    {
    	Response res=new Response();
    	try
    	{
    	userservice.deleteId(userid);
    	res.setMsg("User Record deleted");
    	res.setStatus(true);
    	}catch(Exception e) {}
    	
    	return res;
    }
    
    @RequestMapping("/getAllEmails")
    public List<String> getAllEmails()
    {
    	List<String> emails;
    	emails=empservice.getAllEmails();
    	return(emails);
    }
    
    @RequestMapping("/getAllMobiles")
    public List<String> getAllMobiles()
    {
    	List<String> mobiles;
    	mobiles=empservice.getAllMobiles();
    	return(mobiles);
    }
    
    @RequestMapping("/mobileValidateEmp")
    public ResponseSaveEmployee mobileValidate(@RequestParam("mobile") String mobile)
    {
    	String vermobile;
    	ResponseSaveEmployee response=new ResponseSaveEmployee();
    	response.setMsg("Mobile Number has been successfully verified");
    	response.setStatus(true);
    	try
    	{
    	vermobile=empservice.mobileValidate(mobile);
    		if(vermobile.equals(mobile))
    		{
    			response.setMsg("Mobile Number Allready Existing, Please Enter Another Number");
    			response.setStatus(false);
    		}
    	}
    	catch(Exception e) {}
    	return(response);
    }

    @RequestMapping("/emailValidateEmp")
    public ResponseSaveEmployee emailValidate(@RequestParam("email") String email)
    {
    	String veremail;
    	ResponseSaveEmployee response=new ResponseSaveEmployee();
    	response.setMsg("Email ID has been successfully verified");
    	response.setStatus(true);
    	try
    	{
    		veremail=empservice.emailValidate(email);
    		if(veremail.equals(email))
    		{
    			response.setMsg("Email ID Allready Existing, Please Enter Another Email ID");
    			response.setStatus(false);
    		}
    	}
    	catch(Exception e) {}
    	return(response);
    }
    
    @RequestMapping("/emailValidateUser")
    public ResponseSaveEmployee emailValidateUser(@RequestParam("email") String email)
    {
    	String veremail;
    	ResponseSaveEmployee response=new ResponseSaveEmployee();
    	response.setMsg("Email ID has been successfully verified");
    	response.setStatus(true);
    	try
    	{
    		veremail=userservice.emailValidate(email);
    		if(veremail.equals(email))
    		{
    			response.setMsg("Email ID Allready Existing, Please Enter Another Email ID");
    			response.setStatus(false);
    		}
    	}
    	catch(Exception e) {}
    	return(response);
    }
}
