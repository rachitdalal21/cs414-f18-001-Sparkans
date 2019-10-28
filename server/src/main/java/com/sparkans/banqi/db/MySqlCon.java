package com.sparkans.banqi.db;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import com.sparkans.banqi.util.ContextPropertyLoader;

public class MySqlCon {

	public static Connection connection;

	public static Connection getConnection()  {

		if (connection != null) {
			return connection;
		}
		ContextPropertyLoader propertyLoader = new ContextPropertyLoader();
		try {
			Properties props = propertyLoader.getPropValues();
			System.out.println(props.getProperty("sparkans.mysql.url"));

			connection = DriverManager.getConnection(props.getProperty("sparkans.mysql.url"),
					props.getProperty("sparkans.mysql.username"), props.getProperty("sparkans.mysql.password"));
			if (connection != null)
				System.out.println("Connected to the database!");
			else
				System.out.println("Failed to make connection!");

		} catch (IOException | SQLException e) {
			System.err.format("Error Occured while estabilshing db connection: \n%s", e.getMessage());
		}
		return connection;
	}

}
