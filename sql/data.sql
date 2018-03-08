CREATE TABLE IF NOT EXISTS `data`(
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`content` varchar(50) DEFAULT NULL,
	`hashId` varchar(50) DEFAULT NULL,
	`unixtime` int(20) 	DEFAULT NULL,
	`updatetime` varchar(20) DEFAULT NULL,
	`url` varchar(200) DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8