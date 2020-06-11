CREATE DATABASE ng_hotels_db

USE ng_hotels_db

CREATE TABLE hotel (
    ID INT(11) NOT NULL PRIMARY KEY,
    TITLE VARCHAR(180),
    DESCRIPTION VARCHAR(255),
    IMAGE VARCHAR(200),
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) 

/* RENAME TABLE hotel to car*/