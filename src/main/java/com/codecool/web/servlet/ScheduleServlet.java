package com.codecool.web.servlet;

import com.codecool.web.dao.database.DatabaseScheduleDao;
import com.codecool.web.dao.database.DatabaseUserDao;
import com.codecool.web.dao.database.ScheduleDao;
import com.codecool.web.dao.database.UserDao;
import com.codecool.web.model.Schedule;
import com.codecool.web.model.User;
import com.codecool.web.service.ScheduleService;
import com.codecool.web.service.Simple.SimpleRegisterService;
import com.codecool.web.service.Simple.SimpleScheduleService;
import com.codecool.web.service.exception.ServiceException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

@WebServlet("/schedules")
public class ScheduleServlet extends AbstractServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try (Connection connection = getConnection(req.getServletContext())) {
            ScheduleDao scheduleDao = new DatabaseScheduleDao(connection);
            ScheduleService scheduleService = new SimpleScheduleService(scheduleDao);

            int days = Integer.parseInt(req.getParameter("days"));
            String title = req.getParameter("title");
            boolean isPublished = Boolean.valueOf(req.getParameter("published-status"));

            scheduleService.addNewSchedule(days, title, isPublished);
            Schedule schedule = new Schedule(days, title, isPublished);

            sendMessage(resp, HttpServletResponse.SC_OK, schedule);

        }catch (SerialException e){
            sendMessage(resp, HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
        }catch (SQLException e ){
            handleSqlError(resp, e);
        }
    }
}
