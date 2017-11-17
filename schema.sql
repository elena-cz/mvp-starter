DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
