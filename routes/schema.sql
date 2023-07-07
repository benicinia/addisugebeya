CREATE TABLE IF NOT EXISTS `trans5` (
 `trans_id` INT NOT NULL AUTO_INCREMENT,
 `trans_date` VARCHAR(200),
 `remarks` VARCHAR(255),
 `debit` INT,
 `credit` INT,
 `balance` INT,
   PRIMARY KEY(`trans_id`)
) ENGINE=InnoDB
