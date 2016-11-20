var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var bookshelf = require('./../config/db').bookshelf;

/*
 Building a simple API with Express and Bookshelf.js
 */
var Task = bookshelf.Model.extend({
    tableName: 'tasks'
});

/**
 *
 * @param res
 * @param reason
 * @param message
 * @param code
 */
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
/**
 Next we need to define our API end points - we need to be able to perform basic CRUD operations.
 ### Users
 - `GET    /tasks`    - fetch all tasks
 - `POST   /task`     - create a new task
 - `GET    /task/:id` - fetch a single task
 - `PUT    /task/:id` - update task
 - `DELETE /task/:id` - delete task
 **/


// Get All Tasks
router.get('/tasks', function(req, res, next){
    new Task().fetchAll()
        .then(function (items) {
            res.send(items.toJSON());
        }).catch(function (error) {
        handleError(res, error.message, "Failed to get items.");
    });
});


// Get Single Task
router.get('/task/:id', function(req, res, next){
    Task.forge({id: req.params.id})
        .fetch()
        .then(function (item) {
            res.send(item.toJSON());
        }).catch(function (error) {
        console.log(error);
        res.send('Error retrieving item');
    });
});

//Save Task
router.post('/task', function(req, res, next){
    var item = new Task({
        title: req.body.title,
        isDone: req.body.isDone
    });
    item.save().then(function (saved_item) {
        res.send(saved_item.toJSON());
    }).catch(function (error) {
        handleError(res, error.message, 'Error saving item');
    });
});

// Delete Task by id
router.delete('/task/:id', function(req, res, next){
    Task.forge({id: req.params.id})
        .fetch({require: true})
        .then(function (task) {
            task.destroy()
                .then(function () {
                    res.json({error: false, data: {message: 'task successfully deleted'}});
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        })
        .catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
});

// Update Task by id
router.put('/task/:id', function(req, res, next){
    Task.forge({id: req.params.id})
        .fetch({require: true})
        .then(function (item) {

            item.save({
                title: req.body.title || item.get('title'),
                isDone: req.body.isDone || item.get('isDone')
            })
                .then(function () {
                    res.json({error: false, data: {message: 'task details updated'}});
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        })
        .catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
});

module.exports = router;