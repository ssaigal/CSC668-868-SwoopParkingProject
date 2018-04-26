-- -----------------------------------------------------
-- Schema swoop
-- Run this SQL to setup the schema
-- -----------------------------------------------------
CREATE SCHEMA  swoop;
-- -----------------------------------------------------
-- Table swoop.users
-- -----------------------------------------------------
CREATE TABLE swoop.users (
  user_id SERIAL NOT NULL PRIMARY KEY UNIQUE, 
  username VARCHAR(45) NOT NULL,
  password VARCHAR(100) NOT NULL);

  -- -----------------------------------------------------
-- Table swoop.locations
-- -----------------------------------------------------
CREATE TABLE swoop.locations (
  location_id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  latitude double precision NOT NULL,
  longitude double precision NULL);

 -- -----------------------------------------------------
-- Table swoop.requests
-- -----------------------------------------------------
CREATE TABLE swoop.requests (
  request_id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  user_id INT NOT NULL,
  request_type VARCHAR(45) NOT NULL,
  radius INT,
  time BIGINT,
  position int NOT NULL,
  destination int, 
  FOREIGN KEY (user_id) REFERENCES swoop.users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (position) REFERENCES swoop.locations (location_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (destination) REFERENCES swoop.locations (location_id) ON DELETE CASCADE ON UPDATE CASCADE);
 

-- -----------------------------------------------------
-- Table swoop.user_ratings
-- -----------------------------------------------------
CREATE TABLE swoop.user_ratings (
  user_id  INT NOT NULL,
  request_id INT NOT NULL, 
  rating_type INT NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY (user_id, request_id),
  FOREIGN KEY (user_id) REFERENCES swoop.users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (request_id) REFERENCES swoop.requests (request_id) ON DELETE CASCADE ON UPDATE CASCADE);


 

-- -----------------------------------------------------
-- Table swoop.transactions
-- -----------------------------------------------------
CREATE TABLE swoop.transactions (
  request_id1  INT NOT NULL,
  request_id2 INT NOT NULL, 
  status INT NOT NULL,
  start_time TIMESTAMP(6),
  end_time TIMESTAMP(6),
  PRIMARY KEY (request_id1, request_id2),
  FOREIGN KEY (request_id1) REFERENCES swoop.users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (request_id2) REFERENCES swoop.requests (request_id) ON DELETE CASCADE ON UPDATE CASCADE);