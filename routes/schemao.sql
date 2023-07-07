CREATE TABLE IF NOT EXISTS `passbook5` (
	`or_id` INT NOT NULL AUTO_INCREMENT,
    `or_date` DATETIME,
     `it_no` INT,
    `it_name` VARCHAR(255),
     `it_quantity`INT,
    `it_price`INT,
     `it_thumb`VARCHAR(255),
      `tba`INT, 
       `snn`INT(1) NULL,              
     PRIMARY KEY(`or_id`)
 ) ENGINE=InnoDB
