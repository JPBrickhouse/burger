-- Schema for the burgers_db

-- ------------------------------------
-- Comment out these lines while in Heroku
-- because the database already exists
-- CREATE DATABASE burgers_db;
-- USE burgers_db;
-- ------------------------------------

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);