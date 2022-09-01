const express = require('express');
const router = express.Router();

// import todoitems controller path to use required controller
const todoItemController = require('../controllers/todo_item_controller')

// Middleware to decode data coming from browser
router.use(express.urlencoded({ extended: true }));

// this will handle the requests coming to /action/todo-item and execute create function from todo_item_controller.js
router.post('/todo-item',todoItemController.todoItem);


// this will handle the requests coming to /action/delete and execute delete function from todo_item_controller.js
router.post('/delete',todoItemController.delete);


// exporting router 
module.exports= router;