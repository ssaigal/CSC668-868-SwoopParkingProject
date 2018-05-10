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
  request_type int NOT NULL,
  request_status int NOT NULL, 	
  time BIGINT,
  position int NOT NULL,
  destination int NOT NULL, 
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
  
-- FUNCTION: swoop.calculate_distance(double precision, double precision, double precision, double precision)

-- DROP FUNCTION swoop.calculate_distance(double precision, double precision, double precision, double precision);

CREATE OR REPLACE FUNCTION swoop.calculate_distance(
	lat1 double precision,
	lon1 double precision,
	lat2 double precision,
	lon2 double precision)
    RETURNS integer
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	R int;
	dLat double precision;
	dLon double precision;
	a double precision;
	c double precision;
	d double precision;
BEGIN
	R := 6371;
	dLat := (lat1-lat2) * (pi()/180);
	dLon := (lon1-lon2) * (pi()/180);
	a := sin(dLat/2) * sin(dLat/2) + 
	cos(lat1 * (pi()/180)) * 
	cos(lat2 * (pi()/180))
	* sin(dLon/2) * sin(dLon/2);
	c := 2 * atan2(sqrt(a),sqrt(1-a));
	d := R * c;

	RETURN d;
END	

$BODY$;

ALTER FUNCTION swoop.calculate_distance(double precision, double precision, double precision, double precision)
    OWNER TO swooper;

