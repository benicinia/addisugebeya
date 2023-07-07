CREATE TABLE IF NOT EXISTS `passbook1` (
	`pyid` INT NOT NULL AUTO_INCREMENT,
    `nm` VARCHAR(255),
     `amt`VARCHAR(255),
    `eid`INT,             
     PRIMARY KEY(`pyid`)
 ) ENGINE=InnoDB
