CREATE DATABASE ems;
USE ems;

CREATE TABLE User (
	username varchar(255) UNIQUE,
	user_id int NOT NULL,
    emp_name varchar(255),
    phone bigint,
    cnic bigint,
    pass varchar(255),
    address varchar(255),
    join_date date,
    base_salary bigint,
    PRIMARY KEY (user_id)
);

INSERT INTO User VALUES ("root", 000, "root", 000, 000, "root", "office", "1000-01-01", 0); 

CREATE TABLE Admin (
	-- Disjoint relation | column from User table 
	user_id int NOT NULL,
    
    -- Admin table specific attributes
    title varchar(255),
    authority_level varchar(255),
    
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Worker (
	-- Disjoint relation | column from User table 
	user_id int NOT NULL,
    
    -- Worker table specific attributes
    ot_rate int,
    skill_area varchar(255),
    expertise varchar(255),
    
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Attendance(
	user_id int NOT NULL,
    attendance_date date NOT NULL,
    overtime int,
    rpt_time time,
    late_hours int,
    attendance varchar(255),
    
    PRIMARY KEY (user_id, attendance_date),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- CREATE TABLE Salary (
-- 	salary_month varchar(255) NOT NULL,
-- 	user_id int NOT NULL,
--     base_salary bigint,
--     
--     PRIMARY KEY (salary_month, user_id),
--     FOREIGN KEY (user_id, base_salary) REFERENCES User(user_id, base_salary)
-- );

SELECT * FROM ATTENDANCE;

DROP TABLE Admin;
DROP TABLE Attendance;
DROP TABLE Salary;
DROP TABLE Worker;
DROP TABLE User;




    