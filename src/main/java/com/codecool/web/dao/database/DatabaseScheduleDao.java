package com.codecool.web.dao.database;

import com.codecool.web.model.Schedule;

import java.beans.PropertyEditorManager;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseScheduleDao extends AbstractDao implements ScheduleDao {


    public DatabaseScheduleDao(Connection connection) {
        super(connection);
    }

    @Override
    public List<Schedule> findAllSchedules() {
        List<Schedule> schedules = new ArrayList<>();
        try(Statement statement = connection.createStatement()) {
            String sql = "SELECT * FROM schedules;";
            ResultSet resultSet = statement.executeQuery(sql);

            while (resultSet.next()) {
                schedules.add(fetchSchedule(resultSet));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return schedules;
    }

    @Override
    public Schedule findScheduleById(int scheduleId) {
        Schedule schedule = new Schedule();
        String sql = "SELECT * FROM schedules WHERE scheduleId = ?;";
        try(PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, scheduleId);
            try(ResultSet resultSet = preparedStatement.executeQuery()) {
                if(resultSet.next()) {
                    schedule = fetchSchedule(resultSet);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return schedule;
    }

    @Override
    public List<Schedule> findAllSchedulesByUserId(int userId) {
        List<Schedule> schedules = new ArrayList<>();
        String sql = "SELECT * FROM schedules INNER JOIN users ON schedules.scheduleId = users.userId WHERE users.userId = ?;";
        try(PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, userId);
            try(ResultSet resultSet = statement.executeQuery()) {
                while(resultSet.next()) {
                    schedules.add(fetchSchedule(resultSet));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return schedules;
    }

    public Schedule fetchSchedule(ResultSet resultSet) throws SQLException {
        String days = resultSet.getString("scheduleId");
        String title = resultSet.getString("title");
        boolean isPublished = resultSet.getBoolean("isPublished");

        return new Schedule(days, title, isPublished);
    }

    @Override
    public void addNewSchedule(String days, String title, boolean isPublished) throws SQLException{
        String sql = "INSERT INTO schedules(days, title, isPublished) VALUES (?,?,?);";
        try(PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, days);
            preparedStatement.setString(2, title);
            preparedStatement.setBoolean(3, isPublished);

            executeInsert(preparedStatement);
        }
    }
}
