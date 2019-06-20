package com.codecool.web.service;
import com.codecool.web.model.Schedule;
import com.codecool.web.service.exception.ServiceException;

import java.sql.SQLException;
import java.util.List;

public interface ScheduleService {
    List<Schedule> findAllSchedules() throws SQLException, ServiceException;
    Schedule findScheduleById(int scheduleId)throws SQLException, IllegalArgumentException, ServiceException;
    List<Schedule> findAllSchedulesByUserId(int userId) throws SQLException, ServiceException;
    void addNewSchedule(String days, String title, boolean isPublished) throws SQLException;

}
