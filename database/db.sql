-- set up database
CREATE DATABASE IF NOT EXISTS database_app;
-- select database to use it
USE database_app;
-- set up user information table
CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL UNIQUE,
    lastname VARCHAR(50) NOT NULL UNIQUE,
    idtype VARCHAR(50) NOT NULL UNIQUE,
    idnum VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(50) NOT NULL UNIQUE,
    mail VARCHAR(50) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);