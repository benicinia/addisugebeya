CREATE TABLE IF NOT EXISTS `inv5` (
 `pr_id` INT NOT NULL AUTO_INCREMENT,
 `date` VARCHAR(200),
 `pr_nm` VARCHAR(200),
 `quant` INT,
 `type` VARCHAR(30),
 `wei` VARCHAR(20),
 `dimen` VARCHAR(20),
 `shpcst` VARCHAR(20),
 `prc` VARCHAR(20),
 `optnz` VARCHAR(200),
 `btnz` VARCHAR(200),
   PRIMARY KEY(`pr_id`)
) ENGINE=InnoDB
