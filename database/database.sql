CREATE DATABASE ng_hotels_db

USE ng_hotels_db

CREATE TABLE hotel (
    ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TITLE VARCHAR(180),
    DESCRIPTION VARCHAR(255),
    IMAGE VARCHAR(200),
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) 

DESCRIBE hotel
/* RENAME TABLE hotel to car*/