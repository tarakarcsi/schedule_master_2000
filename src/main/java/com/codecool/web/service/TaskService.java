package com.codecool.web.service;

import com.codecool.web.model.Task;
import com.codecool.web.service.exception.ServiceException;

import java.sql.SQLException;
import java.util.List;

public interface TaskService {
        List<Task> findAllTask() throws SQLException, ServiceException;
        void addNewTask(String title, String text);
        void updateTask(Task task);
}
