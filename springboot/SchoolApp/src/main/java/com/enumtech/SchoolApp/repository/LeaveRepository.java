package com.enumtech.SchoolApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enumtech.SchoolApp.entity.Leave;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Integer> {
	
	@Query(value="select * from Leave where emp_id=?1",nativeQuery = true)
	List<Leave> getAllLeave(int emp_id);

	@Query(value="select * from leavetable,Employee where leavetable.emp_id=Employee.emp_id and Employee.mobile=?1" ,nativeQuery = true)
	List<Leave> leaveByMobile(String mobile);
	
	@Query(value="select * from leavetable,Employee where leavetable.emp_id=Employee.emp_id and Employee.emp_name=?1" ,nativeQuery = true)
	List<Leave> leaveByName(String fname);
	
	@Query(value="select * from leavetable,Employee where leavetable.emp_id=Employee.emp_id and Employee.emp_id=?1" ,nativeQuery = true)
	List<Leave> leaveById(int eno);
	

}
