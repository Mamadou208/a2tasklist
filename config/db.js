/**
 * Created by Home on 20/11/2016.
 */
var db = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Password',
        database: 'todo_db',
        charset: 'utf8'
    }
};
var knex = require('knex')(db);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
