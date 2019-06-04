package com.codecool.web.service.Simple;

import com.codecool.web.dao.database.UserDao;
import com.codecool.web.model.User;
import com.codecool.web.service.LoginService;
import com.codecool.web.service.exception.ServiceException;

import java.sql.SQLException;

public class SimpleLoginService implements LoginService {

    private final UserDao userDao;

    public SimpleLoginService(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User loginUser(String email, String password) throws SQLException, ServiceException {
        try{
            User user = userDao.findByEmail(email);
            if (user == null || !user.getPassword().equals(password)){
                throw new ServiceException("Login Error");
            }
            return user;
        }catch (IllegalArgumentException e){
            throw new ServiceException(e.getMessage());
        }
    }
}
