package com.enumtech.SchoolApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enumtech.SchoolApp.entity.Employee;


@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {

@Query(value="select * from Employee where designation=?1",nativeQuery = true)
public List<Employee> getEmployeeByDesignation(String designation);

@Query(value="select * from Employee where mobile=?1",nativeQuery = true)
public Employee getEmployeeByMobile(String mobile);

@Query(value="select * from Employee where emp_name=?1",nativeQuery = true)
public Employee getEmployeeByName(String emp_name);

@Query(value="select email from Employee",nativeQuery = true)
public List<String> getAllEmails();

@Query(value="select mobile from Employee",nativeQuery = true)
public List<String> getAllMobiles();

@Query(value="select mobile from Employee where mobile=?1",nativeQuery = true)
public String mobileValidate(String mobile);

@Query(value="select email from Employee where email=?1",nativeQuery = true)
public String emailValidate(String email);
}



