CREATE TABLE IF NOT EXISTS `data`(
	`content` varchar(100) DEFAULT NULL,
	`hashId` varchar(50),
	`unixtime` int(20) 	DEFAULT NULL,
	`updatetime` varchar(20) DEFAULT NULL,
	`url` varchar(200) DEFAULT NULL,
	PRIMARY KEY (`hashId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;