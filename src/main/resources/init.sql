drop TABLE IF EXISTS users cascade;
drop TABLE IF EXISTS schedules cascade;
drop TABLE IF EXISTS tasks cascade;
drop TABLE IF EXISTS slots cascade;
drop TABLE IF EXISTS days cascade;



create table users(
userId serial primary key,
email varchar(40) not null,
name VARCHAR(40) NOT NULL,
password text not null
);

create table schedules(
scheduleId serial primary key,
days text,
title text,
isPublished boolean default false,
userId int,
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
schedule int,
foreign key(schedule) REFERENCES schedules(scheduleId)
);

create table slots(
slotId serial primary key,
hour integer not null,
dayId int,
taskId int,
foreign key (dayId) references days(dayId),
foreign key (taskId)  references tasks(taskId),
constraint hours_between_bounds check(hour >= 0 and hour <= 24)
);


insert into users(email, name, password) values('karcsi@karcsi', 'karcsi', 'karcsi');
insert into users(email, name, password) values('denes@denes', 'denes', 'denes');
insert into users(email, name, password) values('lali@lali', 'lali', 'lali');
insert into users(email, name, password) values('lakatos@denerisz', 'Lakatos Denerisz', 'denerisz69');


insert into schedules(days, title, isPublished, userId) values('monday', 'edzésterv', false, 1);
insert into schedules(days, title, isPublished, userId) values('tuesday', 'feladatok', false, 2);
insert into schedules(days, title, isPublished, userId) values('sunday', 'programok', false, 3);

insert into tasks(title, content) values('bevásárlás', 'bevásárlólista: ');
insert into tasks(title, content) values('edzés', 'edzésterv feladatok:  margaritával a kezemben bámulni a többi gyökeret');
insert into tasks(title, content) values('teregetés', 'ezt sose csináljuk meg');
insert into tasks(title, content) values('főzés', 'tőtött káposztát');
insert into tasks(title, content) values('buli', 'inni jöttünk nem bulizni');
insert into tasks(title, content) values('tanulás', 'wut?');

insert into days(title, schedule) values('hétfő', 1);
insert into days(title, schedule) values('kedd', 2);
insert into days(title, schedule) values('szerda', 3);

insert into slots(hour, dayId, taskId) values(4, 1, 1);
insert into slots(hour, dayId, taskId) values(14, 2, 2);
insert into slots(hour, dayId, taskId) values(20, 3, 3);








