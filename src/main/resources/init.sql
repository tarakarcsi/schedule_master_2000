/*drop TABLE IF EXISTS users cascade;
drop TABLE IF EXISTS schedules cascade;
drop TABLE IF EXISTS tasks cascade;
drop TABLE IF EXISTS slots cascade;

create table users(
userId serial primary key,
email varchar(40) not null,
name VARCHAR(40) NOT NULL,
password text not null
);

create table schedules(
scheduleId serial primary key,
days int,
title text,
isPublished boolean default false,
foreign key (userId) references users(userId)
);


create table tasks(
taskId serial primary key,
title text,
content text
);

CREATE TABLE days(
dayId serial PRIMARY KEY,
title text,
FOREIGN KEY (scheduleId) REFERENCES schedules(scheduleId)

);

create table slots(
slotId serial primary key,
hour integer not null,
foreign key (dayId) references days(dayId),
foreign key (taskId)  references tasks(taskId),
constraint hours_between_bounds check(hour >= 1 and hour <= 24)
);


insert into users(email, name, password) values('karcsi@karcsi', 'karcsi', 'karcsi');
insert into users(email, name, password) values('denes@denes', 'denes', 'denes');
insert into users(email, name, password) values('lali@lali', 'lali', 'lali');
insert into users(email, name, password) values('lakatos@denerisz', 'Lakatos Denerisz', 'denerisz69');*/


--insert into schedules(days, title, isPublished, userId) values(3, 'edzésterv', false, 1);
--insert into schedules(days, title, isPublished, userId) values(5, 'feladatok', false, 2);
--insert into schedules(days, title, isPublished, userId) values(7, 'programok', false, 3);

--insert into tasks(title, scheduleId) values('bevásárlás', 1);
--insert into tasks(title, scheduleId) values('edzés', 1);
--insert into tasks(title, scheduleId) values('teregetés', 2);
--insert into tasks(title, scheduleId) values('főzés', 2);
--insert into tasks(title, scheduleId) values('buli', 3);
--insert into tasks(title, scheduleId) values('tanulás', 3);
--
--insert into days(title, scheduleId) values('hétfő', 1);
--insert into days(title, scheduleId) values('kedd', 2);
--insert into days(title, scheduleId) values('szerda', 3);
--
--insert into slots(hour, dayId, taskId) values(4, 1, 1);
--insert into slots(hour, dayId, taskId) values(14, 2, 2);
--insert into slots(hour, dayId, taskId) values(20, 3, 3);
--insert into slots(hour, dayId, taskId) values(12, 4, 4);








