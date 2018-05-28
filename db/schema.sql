/*Connection String

mysql://iz8hn3349unssr75:x3eeb6pssgdhpc4v@cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/l0cujd4xccbfxpkx


You can use your connection information to connect manually through a client such as HeidiSQL to administer your database.

Property	Value	Action
Host	cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
Username	iz8hn3349unssr75	
Password	x3eeb6pssgdhpc4v	
Reset
Port	3306*/



USE l0cujd4xccbfxpkx;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE condos
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	location varchar(255) NOT NULL,
	owner_id int,
	price int,
	pets boolean DEFAULT 0,
	guests int NOT NULL DEFAULT 1,
	description varchar(1000) NOT NULL,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (owner_id) REFERENCES users(id),
	PRIMARY KEY (id)
);

CREATE TABLE pictures
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	property_id int,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (property_id) REFERENCES condos(id),
	PRIMARY KEY (id)
);

CREATE TABLE calendars
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	property_id int,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (property_id) REFERENCES condos(id),
	PRIMARY KEY (id)
);