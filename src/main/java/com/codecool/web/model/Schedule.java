package com.codecool.web.model;

public class Schedule extends AbstractModel {

    private String days;
    private String title;
    private boolean isPublished;

    public Schedule(int id, String days, String title, boolean isPublished) {
        super(id);
        this.days = days;
        this.title = title;
        this.isPublished = isPublished;
    }

    public Schedule(String days, String title, boolean isPublished) {
        this.days = days;
        this.title = title;
        this.isPublished = isPublished;
    }

    public Schedule() {
    }

    public String getDays() {
        return days;
    }

    public String getTitle() {
        return title;
    }

    public boolean isPublished() {
        return isPublished;
    }
}
