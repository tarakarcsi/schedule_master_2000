package com.codecool.web.dao.database;

import com.codecool.web.model.Task;

import java.sql.SQLException;
import java.util.List;

public interface TaskDao {
    void addNewTask(String title, String content) throws SQLException;
    List<Task> getTaskList() throws SQLException;
    void removeTask(int id) throws  SQLException;
    void updateTask(Task task) throws SQLException;
}
