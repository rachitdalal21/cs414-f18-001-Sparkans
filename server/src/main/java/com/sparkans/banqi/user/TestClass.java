package com.sparkans.banqi.user;

import java.sql.*;

public class TestClass {

	public static void main(String args[]) throws SQLException {
		
		
		UserBean user1 = new UserBean();
		user1.nickname = "Sidhu";
		user1.email = "sidhu.bhp@gmail.com";
		user1.password = "Ganesh@123";
		
		UserBean user3 = new UserBean();
		user3.nickname = "Swathy";
		user3.email = "swathy.bhp@gmail.com";
		user3.password = "Ganesh@123";

		UserBean user2 = new UserBean();
		user2.nickname = "Swathy";
		user2.password = "Ganesh@123";
		user2.isActive_flag = 'Y';
		
		UserBean user4 = new UserBean();
		user4.nickname = "Swathy";
		user4.email = "swathy.bhp@gmail.com";
		user4.password = "Ganesh";
//	
//		UserRegistration reg = new UserRegistration();
//		reg.createUser(user1);
////		
//		UserRegistration reg1 = new UserRegistration();
//		reg1.createUser(user3);
		
//		UserRegistration reg3 = new UserRegistration();
//		reg3.createUser(user4);
		
		UserSignIn sign = new UserSignIn();
		sign.signInUser(user2);
////		
	}
}
