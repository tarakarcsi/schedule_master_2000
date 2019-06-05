package com.codecool.web.model;

public class Task extends AbstractModel{
    private final String title;
    private final String content;

    public Task(int id, String title, String content) {
        super(id);
        this.title = title;
        this.content = content;
    }

    public Task(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
