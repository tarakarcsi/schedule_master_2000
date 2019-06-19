package com.codecool.web.service.Simple;

import com.codecool.web.dao.database.DatabaseTaskDao;
import com.codecool.web.model.Task;
import com.codecool.web.service.TaskService;
import com.codecool.web.service.exception.ServiceException;

import java.sql.SQLException;
import java.util.List;

public class SimpleTaskService implements TaskService {
    private DatabaseTaskDao taskDao;

    public DatabaseTaskDao getTaskDao() {
        return taskDao;
    }

    public SimpleTaskService(DatabaseTaskDao taskDao) {
        this.taskDao = taskDao;
    }

    @Override
    public List<Task> findAllTask() throws SQLException, ServiceException {
        return taskDao.getTaskList();
    }

    @Override
    public void addNewTask(String title, String text) {
        taskDao.addNewTask(title, text);
    }
}
