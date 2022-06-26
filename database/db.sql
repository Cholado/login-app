-- set up database
CREATE DATABASE IF NOT EXISTS database_app;
-- select database to use it
USE database_app;
-- set up user information table
CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    idtype VARCHAR(50) NOT NULL,
    idnum VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(50) NOT NULL UNIQUE,
    mail VARCHAR(50) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- set up CRUD information table
CREATE TABLE IF NOT EXISTS crud(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

DESCRIBE crud;