package com.codecool.web.servlet;

import com.codecool.web.dao.database.DatabaseTaskDao;
import com.codecool.web.model.Task;
import com.codecool.web.service.Simple.SimpleTaskService;
import com.codecool.web.service.TaskService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

@WebServlet("/taskModifier")

public class ModifyTaskServlet extends AbstractServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try (Connection connection = getConnection(req.getServletContext())) {
            DatabaseTaskDao taskDao = new DatabaseTaskDao(connection);
            TaskService taskService = new SimpleTaskService(taskDao);

            int id = Integer.parseInt(req.getParameter("taskId"));
            String title = req.getParameter("title");
            String text = req.getParameter("text");

            Task task = new Task(id, title, text);
            taskService.updateTask(task);

            sendMessage(resp, HttpServletResponse.SC_OK, task);

        }catch (SerialException e){
            sendMessage(resp, HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
        }catch (SQLException e ){
            handleSqlError(resp, e);
        }
    }
}
