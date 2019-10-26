package com.sparkans.banqi.user;

import com.sparkans.banqi.db.*;
import java.sql.*;
import java.util.regex.*;

public class UserRegistration {

	private UserBean userBean;
	private Connection conn = null;
	private PreparedStatement statement = null;
	private ResultSet resultSet = null;

	public UserRegistration() {
		this.userBean = new UserBean();
		conn = MySqlCon.getConnection();
		try {
			statement = conn.prepareStatement("SELECT * FROM sparkans.Banqi_Users");
		} catch (SQLException e) {

		}
	}

	//validating if email_id is unique
	public boolean validateEmail(String email) throws SQLException {
		resultSet = statement.executeQuery();
		while (resultSet.next()) {
			if (email.equals(resultSet.getString("email_id"))) {
				System.out.println("Email_id already exists");
				return false;
			}
		}
		return true;
	}

	//validating if nickname is unique
	public boolean validateNickName(String nickName) throws SQLException {
		resultSet = statement.executeQuery();
		while (resultSet.next()) {
			if (resultSet.getString("nickname").equals(nickName)) {
				System.out.println("Nickname already exists");
				return false;
			}
		}
		return true;
	}

	/* Password Criteria implemented are:
	 * Be between 8 and 40 characters long. Contain at least one digit. Contain at
	 * least one lower case character. Contain at least one upper case character.
	 * Contain at least on special character from [ @ # $ % ! . ].
	 */
	public boolean validatePassword(String password) throws SQLException {
		String password_Pattern = "((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,40})";
		Pattern pattern = Pattern.compile(password_Pattern);
		Matcher matcher = pattern.matcher(password);

		if (matcher.matches()) 
			return true;
		else
		{
			System.out.println("Password entered doesnot staisfy the minimum criteria.");
			return false;
		}
	}

	public boolean createUser(UserBean userBean) throws SQLException {

		if (validateEmail(userBean.getEmail()) && validateNickName(userBean.getNickname()) && validatePassword(userBean.getPassword()))
		{
			System.out.println("\nInserting records into table...");

			String sql = "INSERT INTO sparkans.Banqi_Users"
					+ "(nickname, password,email_id,isActive_flag,created_TS,isLoggedIn_flag,lastLoggedIn_TS)"
					+ " VALUES(?, ?, ?, ?, ?, ?, ?)";

			statement = conn.prepareStatement(sql,PreparedStatement.RETURN_GENERATED_KEYS);
			ResultSet keyResultSet = statement.getGeneratedKeys();

			if (keyResultSet.next()) {
				int user_id = keyResultSet.getInt(1);
			}

			statement.setString(1, userBean.nickName);
			statement.setString(2, userBean.password);
			statement.setString(3, userBean.email);
			statement.setString(4, String.valueOf("Y"));
			statement.setTimestamp(5, userBean.createdTS);
			statement.setString(6, String.valueOf("Y"));
			statement.setTimestamp(7, userBean.lastLoggedInTS);

			statement.executeUpdate();
			System.out.println("You are successfully Registered in the Game!!");
			return true;

		} else {
			System.out.println("Could not Register!!");
			resultSet.close();
		    conn.close();
			return false;
		}
	}

}
