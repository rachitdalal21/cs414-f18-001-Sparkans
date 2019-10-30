package com.sparkans.banqi.user;

public class Invitation {

    public String to;
    public String from;

    public boolean accepted = false;

    public  Invitation(){}
    

    public Invitation(String to, String from){
        this.to = to;
        this.from = from;
    }
}
