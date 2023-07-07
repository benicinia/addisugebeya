CREATE TABLE IF NOT EXISTS `passbook1` (
	`trid` INT(4) NOT NULL AUTO_INCREMENT,
    `nm` VARCHAR(30) NULL,
     `lnc` VARCHAR(255) NULL UNIQUE,
    `tb2` INT(4) NOT NULL DEFAULT '0',
     `tme` TIMESTAMP NULL,
    `idd`VARCHAR(30) NULL,           
     PRIMARY KEY(`trid`)
 ) ENGINE=InnoDB
