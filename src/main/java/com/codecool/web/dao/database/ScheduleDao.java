package com.codecool.web.dao.database;

import com.codecool.web.model.Schedule;

import java.util.List;

public interface ScheduleDao {

    List<Schedule> findAllSchedules();
    Schedule findScheduleById(int scheduleId);
    List<Schedule> findAllSchedulesByUserId(int userId);
}
