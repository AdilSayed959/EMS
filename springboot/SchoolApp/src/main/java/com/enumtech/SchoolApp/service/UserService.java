package com.enumtech.SchoolApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.enumtech.SchoolApp.entity.User;
import com.enumtech.SchoolApp.repository.UserRepository;

@Service("userservice")
public class UserService {
	
	@Autowired
	 private UserRepository repository;

	public User registerUser(User u) {
		// TODO Auto-generated method stub
		
		return repository.save(u);
	}

	

	public User forgotPassword(String email) {
		// TODO Auto-generated method stub
		return(repository.forgotPass(email));
	}



	


	public List<User> getall() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}



	public User searchId(int id) {
		// TODO Auto-generated method stub
		return repository.findOne(id);
	}

	

	
	public User loginUser(int user_id, String user_password) {
		// TODO Auto-generated method stub
		return(repository.loginUser(user_id,user_password));
	}



	public User searchEmail(String email) {
		// TODO Auto-generated method stub
		return repository.searchEmail(email);
	}



	public void deleteId(int userid) {
		// TODO Auto-generated method stub
		repository.delete(userid);
		}



	public String emailValidate(String email) {
		// TODO Auto-generated method stub
		return repository.emailValidate(email);
	}



	
		
	
	 
	 
}
