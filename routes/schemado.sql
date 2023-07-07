CREATE TABLE IF NOT EXISTS `passbook1` (
	`doid` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `ca_nm` VARCHAR(255) NULL,
    `amt` VARCHAR(11) NULL,
    `don_id`INT(8) NULL,
    `don_nm` VARCHAR(11) NULL,
    `don_phn` VARCHAR(11) NULL,
    `dolnk` VARCHAR(11) NULL,
    `tme`DATETIME ON UPDATE CURRENT_TIMESTAMP,    
    `rmrk` mediumtext NULL COLLATE utf8mb4_bin,


     `quant` mediumtext NULL COLLATE utf8mb4_bin,
    `typ` VARCHAR(30) NULL,
     `wei`INT(8) NULL,
    `dimen`INT,
     `shpncst`VARCHAR(255),
      `prc`VARCHAR(30),  
      `optnz`mediumtext NULL COLLATE utf8mb4_bin, 
      `btnz`mediumtext NULL COLLATE utf8mb4_bin, 
      `nopt`INT(8) NULL, 
                    
     PRIMARY KEY(`doid`)
 ) ENGINE=InnoDB
