package com.sparkans.banqi.user;

import com.sparkans.banqi.user.UserBean;

public class UserSignIn {

    private UserBean userBean;

    public UserBean getUserBean() {
        return userBean;
    }

    public void setUserBean(String email, String nickname, String password) {
        this.userBean = new UserBean(email, nickname, password);
    }

    // @TODO: 10/4/19
    public boolean signInUser(String nickname, String password){
        //connect to DB and set user active
        return true;
    }

}
