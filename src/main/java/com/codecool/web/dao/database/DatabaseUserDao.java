package com.codecool.web.dao.database;

import com.codecool.web.model.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseUserDao extends AbstractDao implements UserDao {

    public DatabaseUserDao(Connection connection) {
        super(connection);
    }

    @Override
    public User findByEmail(String email) throws SQLException {
        String sql = "SELECT * FROM users WHERE email = ?;";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, email);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()){
                    return fetchUser(resultSet);
                }
            }
        }
        return null;
    }

    @Override
    public User addNewUser(String name, String email, String password) throws SQLException {
        String sql = "INSERT INTO users(email, name, password) VALUES (?,?,?);";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, email);
            preparedStatement.setString(2, name);
            preparedStatement.setString(3, password);
            executeInsert(preparedStatement);
        }


        return null;
    }

    @Override
    public List<User> getUserList() throws SQLException {
        String sql = "SELECT * FROM users;";
        List<User> users = new ArrayList<>();
        try  (Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()){
                users.add(fetchUser(resultSet));
            }
        }
        return users;
    }

    private User fetchUser(ResultSet resultSet) throws SQLException {
        int id = resultSet.getInt("userId");
        String name = resultSet.getString("name");
        String email = resultSet.getString("email");
        String password = resultSet.getString("password");
        return new User(id, email, name, password);
    }


}
