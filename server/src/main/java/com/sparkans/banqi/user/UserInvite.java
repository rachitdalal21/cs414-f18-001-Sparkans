package com.sparkans.banqi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.sparkans.banqi.db.MySqlCon;

public class UserInvite {

	private Connection conn = null;
	private PreparedStatement statement = null;
	private ResultSet resultSet = null;

	public UserInvite() {
		conn = MySqlCon.getConnection();
	}

	public boolean invitedUser(String user) throws SQLException {

		try
		{
			statement = conn.prepareStatement("SELECT nickname, email_id, isActive_flag, isLoggedIn_flag  "
					+ "FROM sparkans.Banqi_Users WHERE nickname =? OR email_id=?");
			statement.setString(1, user);
			statement.setString(2, user);
			resultSet = statement.executeQuery();

			if (resultSet.next())
			{
				if(resultSet.getString("isLoggedIn_flag").equals("Y") && resultSet.getString("isActive_flag").equals("Y"))
				{
					System.out.println("User is currently logged into the system!!");
					return true;
				} 
				else if (!resultSet.getString("isActive_flag").equals("Y"))
				{
					System.out.println("User has unregistered from the Game. Please register again to play.");
					return false;
				}
				else
				{
					System.out.println("User is not Logged in at the moment!!");
					return false;
				}
			}
			else
			{
				System.out.println("Please register!!");
				return false;
			}

		}catch (SQLException e) {
			System.out.println("Something went wrong in User Invite!!");
		}
		finally {
			if (resultSet != null) {
				resultSet.close();
			}
			if (statement != null) {
				statement.close();
			}
			if (conn != null) {
				conn.close();
			}
		}
		return false;
	}
}
