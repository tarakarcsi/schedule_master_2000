package com.codecool.web.service.Simple;

import com.codecool.web.dao.database.UserDao;
import com.codecool.web.model.User;
import com.codecool.web.service.exception.ServiceException;

import java.sql.SQLException;

public class SimpleRegisterService {

    private final UserDao userDao;

    public SimpleRegisterService(UserDao userDao) {
        this.userDao = userDao;
    }

    public User registerUser(String name, String email, String password) throws SQLException, ServiceException {
        try{
            User user = userDao.addNewUser(name, email, password);
            if (user == null || !user.getPassword().equals(password)){
                throw new ServiceException("Login Error");
            }
            return user;
        }catch (IllegalArgumentException e){
            throw new ServiceException(e.getMessage());
        }
    }
}
