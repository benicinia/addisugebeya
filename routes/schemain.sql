CREATE TABLE IF NOT EXISTS `passbook1` (
	`prd` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `pr_nm` VARCHAR(255) NULL,
     `quant` mediumtext NULL COLLATE utf8mb4_bin,
    `typ` VARCHAR(30) NULL,
     `wei`INT(8) NULL,
    `dimen`INT,
     `shpncst`VARCHAR(255),
      `prc`VARCHAR(30),  
      `optnz`mediumtext NULL COLLATE utf8mb4_bin, 
      `btnz`mediumtext NULL COLLATE utf8mb4_bin, 
      `nopt`INT(8) NULL, 
      `tme`DATETIME ON UPDATE CURRENT_TIMESTAMP, 
      `cntrl` INT(1) NOT NULL DEFAULT '1',                 
     PRIMARY KEY(`prd`)
 ) ENGINE=InnoDB

