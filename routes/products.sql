CREATE TABLE IF NOT EXISTS `products5` (
 `product_id` INT NOT NULL AUTO_INCREMENT,
 `date_created` VARCHAR(200),
 `details` VARCHAR(255),
 `price` VARCHAR(200),
 `data`  mediumtext COLLATE utf8mb4_bin,
   PRIMARY KEY(`product_id`)
) ENGINE=InnoDB
