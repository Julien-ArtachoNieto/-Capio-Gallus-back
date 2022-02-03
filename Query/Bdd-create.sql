CREATE DATABASE capio;
USE capio;
CREATE TABLE `gaulois`(
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(100) NULL,
`age` INT NULL,
`tall` VARCHAR(100) NULL,
`hair_color` VARCHAR(100) NULL,
`sex` VARCHAR(100) NULL,
`pilosity` VARCHAR(100) NULL,
`armed` VARCHAR(100),
`localisation` VARCHAR(300) NULL,
`stature` VARCHAR(100) NULL,
`status` VARCHAR(100) NULL,
PRIMARY KEY (`id`)
);