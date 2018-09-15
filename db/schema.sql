CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Cheeseburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Baconburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Salmonburger", FALSE);

SELECT * FROM burgers;
