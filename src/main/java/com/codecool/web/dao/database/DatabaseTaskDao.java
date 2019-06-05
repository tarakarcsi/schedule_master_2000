package com.codecool.web.dao.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DatabaseTaskDao extends AbstractDao implements TaskDao{

    DatabaseTaskDao(Connection connection) {
        super(connection);
    }

    @Override
    public void addNewTask(String title, String content) throws SQLException {
        String sql = "INSERT INTO tasks(title, content) VALUES (?,?);";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, title);
            preparedStatement.setString(2, content);
            executeInsert(preparedStatement);
        }catch (SQLException e){
            e.printStackTrace();
        }
    }
}
