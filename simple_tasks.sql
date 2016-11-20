CREATE TABLE `tasks` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `title` varchar(45) NOT NULL,
   `isDone` tinyint(1) DEFAULT NULL,
   PRIMARY KEY (`id`),
   UNIQUE KEY `id_UNIQUE` (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;