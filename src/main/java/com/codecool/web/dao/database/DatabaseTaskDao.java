package com.codecool.web.dao.database;

import com.codecool.web.model.Task;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<Task> getTaskList() throws SQLException {
        String sql = "SELECT * FROM tasks;";
        List<Task> tasks = new ArrayList<>();
        try  (Statement statement = connection.createStatement();
              ResultSet resultSet = statement.executeQuery(sql)) {
            while (resultSet.next()){
                tasks.add(getTask(resultSet));
            }
        }
        return tasks;
    }

    @Override
    public void removeTaskByTitle(String title) throws SQLException {
        // To be implemented.
    }

    @Override
    public void updateTask(Task task) throws SQLException {
        // To be implemented.
    }

    private Task getTask(ResultSet resultSet) throws SQLException {
        int id = resultSet.getInt("taskId");
        String title = resultSet.getString("title");
        String content = resultSet.getString("content");
        return new Task(id, title, content);
    }
}
