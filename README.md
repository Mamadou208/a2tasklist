# Node Todo App

A Node app built with [BOOKSHELF.JS](http://bookshelfjs.org/) ,MySQL and Angular2. For demonstration purposes and a tutorial.

Node provides the RESTful API. Angular provides the frontend and accesses the API. Bookshelf is a JavaScript ORM for Node.js, built on the Knex SQL query builder.

## Database Schema
In this example, I used a MySQL database with the following table:
 ```sql
 CREATE TABLE `tasks` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `title` varchar(45) NOT NULL,
   `isDone` tinyint(1) DEFAULT NULL,
   PRIMARY KEY (`id`),
   UNIQUE KEY `id_UNIQUE` (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## Requirements

- Make sure you have [Node and npm](http://nodejs.org) installed
- Mysql: Make sure you have your own local or remote Mysql database URI configured in `a2tasklist/config/db.js`

## Installation

1. Clone the repository: `git clone https://github.com/Mamadou208/a2tasklist.git`
2. Install the Api: `npm install`
3. Install the angular2 application by cd into client folder and run: `npm install`
4. Start the server: `npm start`
5. compile angular code by cd into client folder and run: `npm start`
6. Launch your favorite web browser and go to `http://localhost:3000` for application or `http://localhost:3000/api/tasks` for API. 

which will create these endpoints

| Method | URL          | Action                        |
| :----- | :------------| :---------------------------- |
| GET    | `api/tasks`     | Get all tasks                 |
| GET    | `api/task/:id` | Get a task by id              |
| POST   | `api/tasks`     | Create a new task             |
| PUT    | `api/task/:id` | Update an existing task       |
| DELETE | `api/task/:id` | Delete an existing task       |
