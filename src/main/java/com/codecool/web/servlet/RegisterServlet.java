package com.codecool.web.servlet;

import com.codecool.web.dao.database.DatabaseUserDao;
import com.codecool.web.dao.database.UserDao;
import com.codecool.web.model.User;
import com.codecool.web.service.Simple.SimpleRegisterService;
import com.codecool.web.service.exception.ServiceException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

public class RegisterServlet extends AbstractServlet{

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try (Connection connection = getConnection(req.getServletContext())) {
            UserDao userDao = new DatabaseUserDao(connection);
            SimpleRegisterService registerService = new SimpleRegisterService(userDao);

            String email = req.getParameter("email");
            String password = req.getParameter("password");
            String name = req.getParameter("name");

            User user = registerService.registerUser(name, email, password);
            req.getSession().setAttribute("user", user);

            sendMessage(resp, HttpServletResponse.SC_OK, user);
        }catch (SerialException e){
            sendMessage(resp, HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
        }catch (SQLException e ){
            handleSqlError(resp, e);
        }catch (ServiceException e){
            e.printStackTrace();
        }
    }
}

