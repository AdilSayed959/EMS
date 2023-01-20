package com.enumtech.SchoolApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.enumtech.SchoolApp.entity.Designation;

@Repository
public interface DepartmentRepo extends JpaRepository<Designation,Integer> {

}

