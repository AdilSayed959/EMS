package com.enumtech.SchoolApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.enumtech.SchoolApp.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	@Query(value="select * from user where user_id=?1 and user_password=?2",nativeQuery = true)
	User loginUser(int user_id, String user_password);
	
	@Query(value="select * from user where user_email=?1",nativeQuery = true)
	User forgotPass(String email);

	@Query(value="select * from user where user_email=?1",nativeQuery = true)
	User searchEmail(String email);
	
	@Query(value="select user_email from user where user_email=?1",nativeQuery = true)
	String emailValidate(String email);
	
	/*@Query(value="DELETE FROM user WHERE user.user_id=?1",nativeQuery = true)
	void deleteId(int userid);*/
}
