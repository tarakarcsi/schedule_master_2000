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
import org.springframework.cglib.SpringCglibInfo;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.net.http.HttpRequest;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/createSchedule")
public class ScheduleServlet extends AbstractServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try(Connection connection = getConnection(req.getServletContext())) {

            ScheduleDao scheduleDao = new DatabaseScheduleDao(connection);
            SimpleScheduleService scheduleService = new SimpleScheduleService(scheduleDao);

            List<Schedule> scheduleList = scheduleService.findAllSchedules();

            sendMessage(resp, HttpServletResponse.SC_OK, scheduleList);
        } catch (SQLException e) {
            e. printStackTrace();
        } catch (ServiceException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try (Connection connection = getConnection(req.getServletContext())) {
            ScheduleDao scheduleDao = new DatabaseScheduleDao(connection);
            ScheduleService scheduleService = new SimpleScheduleService(scheduleDao);

            String days = req.getParameter("days");
            String title = req.getParameter("title");
            boolean isPublished = Boolean.valueOf(req.getParameter("publishedStatus"));

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
