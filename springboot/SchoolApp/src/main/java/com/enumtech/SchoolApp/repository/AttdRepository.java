package com.enumtech.SchoolApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.enumtech.SchoolApp.entity.Attendance;


public interface AttdRepository extends JpaRepository<Attendance,Integer > {
	
	@Query(value="select * from attendance where emp_id=?1",nativeQuery = true)
	List<Attendance> getAttendById(int emp_id);
	
	@Query(value="select * from attendance,employee where attendance.emp_id=employee.emp_id and employee.mobile=?1",nativeQuery = true)
	List<Attendance> getAttByMobile(String mobile);

	@Query(value = "select * from attendance,employee where attendance.emp_id=employee.emp_id and employee.emp_name=?1",nativeQuery = true)
	List<Attendance> getAttByName(String emp_name);



}
