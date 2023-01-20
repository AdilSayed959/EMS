package com.enumtech.SchoolApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enumtech.SchoolApp.entity.Designation;
import com.enumtech.SchoolApp.repository.DesignationRepo;


@Service("DesignationService")
public class DesignationService {

	@Autowired
	private DesignationRepo desgrepo;
	
	public void registerDesg(Designation desg) {
		// TODO Auto-generated method stub
		desgrepo.save(desg);
	}
	
	public List<Designation> viewAllDesgs() {
		// TODO Auto-generated method stub
		return (desgrepo.findAll());
	}

}
