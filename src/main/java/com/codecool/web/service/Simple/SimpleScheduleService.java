package com.codecool.web.service.Simple;
import com.codecool.web.dao.database.ScheduleDao;
import com.codecool.web.model.Schedule;
import com.codecool.web.service.ScheduleService;
import com.codecool.web.service.exception.ServiceException;

import java.sql.SQLException;
import java.util.List;

public class SimpleScheduleService implements ScheduleService {
    private final ScheduleDao scheduleDao;

    public SimpleScheduleService(ScheduleDao scheduleDao) {
        this.scheduleDao = scheduleDao;
    }


    @Override
    public Schedule findAllSchedules(String email) throws SQLException, ServiceException {
        
    }

    @Override
    public Schedule findScheduleById(int scheduleId) throws SQLException, IllegalArgumentException, ServiceException {
        return null;
    }

    @Override
    public List<Schedule> findAllSchedulesByUserId(int userId) throws SQLException, ServiceException {
        return null;
    }
}
