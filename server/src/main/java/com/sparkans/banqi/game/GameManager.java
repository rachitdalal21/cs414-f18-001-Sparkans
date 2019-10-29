package com.sparkans.banqi.game;

import com.sparkans.banqi.user.UserBean;

import java.util.ArrayList;

public class GameManager {

    private ArrayList<BanqiBoard> boards = new ArrayList<BanqiBoard>();

    public BanqiBoard addGame(UserBean user1, UserBean user2){

        return null;
    }

    public boolean removeGame(UserBean user1, UserBean user2){

        return false;
    }

    public boolean pauseGame(UserBean user1, UserBean user2){

        return false;
    }

    public boolean updateBoard(UserBean user1, UserBean user2, String src, String dest){

        return false;
    }
}
