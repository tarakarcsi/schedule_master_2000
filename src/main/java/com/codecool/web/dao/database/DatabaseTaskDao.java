package com.codecool.web.dao.database;

import com.codecool.web.model.Task;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseTaskDao extends AbstractDao implements TaskDao{

    public DatabaseTaskDao(Connection connection) {
        super(connection);
    }

    @Override
    public void addNewTask(String title, String content) {
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
    public void removeTask(int id)  {
        String sql = "DELETE FROM tasks WHERE taskId = ?" +
            "DELETE FROM tasks WHERE id =?;";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, id);
            preparedStatement.setInt(2,id);
            preparedStatement.executeUpdate();
            connection.commit();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public void updateTask(Task task) {
        try (PreparedStatement preparedStatement =
             connection.prepareStatement("UPDATE tasks SET title = ?, content = ?" +
                 "WHERE title = '" + task.getTitle() + "'")) {
            preparedStatement.setString(1, task.getTitle());
            preparedStatement.setString(2, task.getContent());
            executeInsert(preparedStatement);

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private Task getTask(ResultSet resultSet) throws SQLException {
        int id = resultSet.getInt("taskId");
        String title = resultSet.getString("title");
        String content = resultSet.getString("content");
        return new Task(id, title, content);
    }
}
