package com.codecool.web.model;

public class Schedule extends AbstractModel {

    private int days;
    private String title;
    private boolean isPublished;

    public Schedule(int id, int days, String title, boolean isPublished) {
        super(id);
        this.days = days;
        this.title = title;
        this.isPublished = isPublished;
    }

    public Schedule(int days, String title, boolean isPublished) {
        this.days = days;
        this.title = title;
        this.isPublished = isPublished;
    }

    public Schedule() {
    }

    public int getDays() {
        return days;
    }

    public String getTitle() {
        return title;
    }

    public boolean isPublished() {
        return isPublished;
    }
}
