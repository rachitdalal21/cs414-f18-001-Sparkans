package com.sparkans.banqi.user;


import java.util.Date;

public class UserBean{

    private String email;
    private String nickname;
    private String password;
    private boolean active;
    private Date createDate;
    private boolean loggedIn;
    private Date lastLoggedInTS;

    public UserBean() {
    }

    public UserBean(String email, String nickname, String password){
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }

    public String getEmail(){
        return email;
    }

    public String getNickname(){
        return nickname;
    }

    public String getPassword(){
        return password;
    }

    public boolean isActive(){
        return active;
    }

    public Date getCreateDate(){
        return createDate;
    }

    public boolean isLoggedIn(){
        return isLoggedIn();
    }

    public  Date getLastLoggedInTS(){
        return lastLoggedInTS;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public void setActive(boolean active){
        this.active = active;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public void setLastLoggedInTS(Date lastLoggedInTS) {
        this.lastLoggedInTS = lastLoggedInTS;
    }
}
