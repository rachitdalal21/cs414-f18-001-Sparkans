package com.sparkans.banqi.user;

import com.sparkans.banqi.db.*;
import java.sql.*;

public class UserSignIn {

	private UserBean userBean;
	private Connection conn = null;
	private PreparedStatement statement = null;
	private ResultSet resultSet = null;

	public UserSignIn() {
		this.userBean = new UserBean();
		conn = MySqlCon.getConnection();
		try {
			statement = conn.prepareStatement("SELECT * FROM sparkans.Banqi_Users");
		} catch (SQLException e) {

		}
	}

	//validating if nickname present in Database 
	public boolean validNickName(String nickName) throws SQLException {
		resultSet = statement.executeQuery();
		while (resultSet.next()) {
			if (resultSet.getString("nickname").equals(nickName)) {
				return true;
			}
		}
		return false;
	}

	public boolean signInUser(UserBean userBean) throws SQLException {

		resultSet = statement.executeQuery();
		while (resultSet.next()) {		

			if (validNickName(userBean.getNickname())) 
			{
				PreparedStatement select = conn.prepareStatement("SELECT * FROM sparkans.Banqi_Users WHERE nickname =?");
				select.setString(1, userBean.getNickname());
				ResultSet rs = select.executeQuery();

				if(rs.next()) {
					if(rs.getString("password").equals(userBean.getPassword()) && 'Y' == userBean.isActive()) {

						PreparedStatement update = conn.prepareStatement("UPDATE sparkans.Banqi_Users "
								+ "SET isLoggedIn_flag = ?, lastLoggedIn_TS = ? WHERE nickname = ?");
						update.setString(1, String.valueOf('Y'));
						update.setTimestamp(2, userBean.lastLoggedInTS);
						update.setString(3, userBean.getNickname());
						update.executeUpdate();

						System.out.println("Credentials verified. You are Logged In!!");
						return true;
					} 
					else if (userBean.isActive() != 'Y')
					{
						System.out.println("User has unregistered from the Game. Please register again to play.");
						return false;
					}
					else
					{
						System.out.println("Wrong Credentials entered.");
						return false;
					}
				}
			}
			else
			{
				System.out.println("Please register to play the Game!!");
				return false;
			}
		}
		conn.close();
		return false;
	}
}
