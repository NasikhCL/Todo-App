// creating schema for todo list 

// import mongoose
const mongoose =require('mongoose');


// database schema definition
const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true

    }

});

const Todo = mongoose.model('todo', todoSchema);

module.exports= Todo;
