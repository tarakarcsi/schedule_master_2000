DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS slots;

CREATE TABLE users(
userId SERIAL PRIMARY KEY,
email VARCHAR(40) NOT NULL,
name VARCHAR(40) NOT NULL,
password TEXT NOT NULL
);

CREATE TABLE schedules(
scheduleId SERIAL PRIMARY KEY,
days INT,
title TEXT,
isPublished BOOLEAN DEFAULT_FALSE,
userId FOREIGN KEY REFERENCES users(userId)
);


CREATE TABLE tasks(
taskId SERIAL PRIMARY KEY,
title TEXT,
content TEXT
);

CREATE TABLE days(
dayId SERIAL PRIMARY KEY,
title TEXT,
scheduleId FOREIGN KEY REFERENCES schedules(scheduleId)

);

CREATE TABLE slots(
hour INTEGER NOT NULL,
dayId FOREIGN KEY REFERENCES days(dayId),
taskId FOREIGN KEY REFERENCES tasks(taskId),
check(hour >= 1 and hour <= 24)
);


INSERT INTO users(email, name, password) VALUES('karcsi@karcsi', 'karcsi', 'karcsi');
INSERT INTO users(email, name, password) VALUES('denes@denes', 'denes', 'denes');
INSERT INTO users(email, name, password) VALUES('lali@lali', 'lali', 'lali');
INSERT INTO users(email, name, password) VALUES('lakatos@denerisz', 'Lakatos Denerisz', 'denerisz69');


INSERT INTO schedules(days, title, isPublished, userId) VALUES(3, 'edzésterv', false, 1);
INSERT INTO schedules(days, title, isPublished, userId) VALUES(5, 'feladatok', false, 2);
INSERT INTO schedules(days, title, isPublished, userId) VALUES(7, 'programok', false, 3);

INSERT INTO tasks(title, scheduleId) VALUES('bevásárlás', 1);
INSERT INTO tasks(title, scheduleId) VALUES('edzés', 1);
INSERT INTO tasks(title, scheduleId) VALUES('teregetés', 2);
INSERT INTO tasks(title, scheduleId) VALUES('főzés', 2);
INSERT INTO tasks(title, scheduleId) VALUES('buli', 3);
INSERT INTO tasks(title, scheduleId) VALUES('tanulás', 3);

INSERT INTO days(title, scheduleId) VALUES('hétfő', 1);
INSERT INTO days(title, scheduleId) VALUES('kedd', 2);
INSERT INTO days(title, scheduleId) VALUES('szerda', 3);

INSERT INTO slots(hour, dayId, taskId) VALUES(4, 1, 1);
INSERT INTO slots(hour, dayId, taskId) VALUES(14, 2, 2);
INSERT INTO slots(hour, dayId, taskId) VALUES(20, 3, 3);
INSERT INTO slots(hour, dayId, taskId) VALUES(12, 4, 4);








