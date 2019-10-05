package com.sparkans.banqi.user;

public class UserRegistration {

    private UserBean userBean;

    public void setUserBean(String email, String nickname, String password) {
        this.userBean = new UserBean(email, nickname, password);
    }

    public UserBean getUserBean() {
        return userBean;
    }

    public boolean validateEmail(String email){
        // TODO: 10/4/19  what are we vailidating for these methods?
        return true;
    }

    public boolean validateNickName(String nickName){
        // TODO:
        return true;
    }

    public boolean validatePassword(String password){
        // TODO:
        return true;
    }

    public boolean createUser(String email, String nickname, String password){
        //TODO connect to DB and add user
        return true;
    }

}
