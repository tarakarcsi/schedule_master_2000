package com.codecool.web.dao.database;

import com.codecool.web.model.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
        return null;
    }

    @Override
    public List<User> getUserList() throws SQLException {
        return null;
    }

    private User fetchUser(ResultSet resultSet) throws SQLException {
        int id = resultSet.getInt("userId");
        String name = resultSet.getString("name");
        String email = resultSet.getString("email");
        String password = resultSet.getString("password");
        return new User(id, email, name, password);
    }


}
