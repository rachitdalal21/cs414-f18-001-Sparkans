package com.sparkans.banqi.db;

import java.sql.*;

public class MySqlCon {

	private static String url = "jdbc:mysql://faure.cs.colostate.edu:3306/sparkans?useLegacyDatetimeCode=false&serverTimezone=UTC";
	private static String username = "username";
	private static String password = "password";
	private static Connection conn;

	public static Connection getConnection(){  
		try{
			conn = DriverManager.getConnection(url,username,password);
			
			if(conn != null)
				System.out.println("Connected to the database!");
			else
				System.out.println("Failed to make connection!");

		}catch(SQLException e){ 
			System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
		}  
		return conn;
	}
}
