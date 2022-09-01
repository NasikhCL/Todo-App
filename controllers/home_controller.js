// import database model
const Todo = require('../models/todo_list');

// controller function for route '/'
module.exports.home=function(req,res){
    console.log(req.body);
    Todo.find({}, function(err, todos) {
 
        if(err){
            console.log("error in fetching contact from db")
            return;
        }
        return res.render('index',{
            title: "todo list",
            todo_list: todos
            
            
        });
 

    });
}
