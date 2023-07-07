CREATE TABLE IF NOT EXISTS `passbook1` (
	`message_id` INT NOT NULL AUTO_INCREMENT,
    `send_date` DATETIME NULL,
    `sender_name` VARCHAR(255) NULL,
     `messages`TEXT NULL COLLATE utf8mb4_bin,
    `scp`VARCHAR(30) NULL,
     `snn`INT(2) NULL,
    `snid`INT(9) NULL,             
     PRIMARY KEY(`message_id`)
 ) ENGINE=InnoDB
