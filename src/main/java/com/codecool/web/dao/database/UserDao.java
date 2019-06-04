package com.codecool.web.dao.database;

import com.codecool.web.model.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDao {

    User findByEmail(String email) throws SQLException;
    void addNewUser(User user) throws SQLException;
    List<User> getUserList() throws SQLException;
}
