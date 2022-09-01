// import database configuaration
const Todo = require('../models/todo_list');




/*
This function will create a new todolist entry in 
the database from the entered data and refresh the whole page
*/
module.exports.todoItem = function(req,res) {

    let newDate;
    // if no date is selected
    if(req.body.date.length == 0){
        newDate = 'No Deadline'
    }
    // If date is selected, this will convert the date to required format
    else{
        let temp = req.body.date;
        let date = temp.substring(8, 10);
        let mon = temp.substring(5, 7);
        let year = temp.substring(0, 4);

        if(date[0] == '0'){
            date = date.substring(1);
        }
        if(mon[0] == '0'){
            mon = mon.substring(1);
        }

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        newDate = "" + months[mon-1] + " " + date + ", " + year;
    }


  
    // To create new task and store in database
    //  populating over database

         Todo.create({
            description: req.body.description,
             category: req.body.category,
            date:  newDate
    

        }, function(err,newTodoItem){
             if(err){
                console.log('error in creating a todo item');
                return;
            }
            console.log("*****",newTodoItem);
          
        });
        res.redirect('back');
    }
 
    // this function will be called when delete-tasks button is clicked.
    // It can delete a task or a list of tasks from database.
    module.exports.delete= function(req,res){

        if (req.body.id == undefined) {
            console.log("user not selected any task to delete");
            return res.redirect('back');
            
        }
        // if only one task to delete
        else if(typeof(req.body.id) == 'string'){
            Todo.findByIdAndDelete(req.body.id, function(err){
                if(err){
                    console.log('error in deleting a task');
                    return;
                }
                return res.redirect('back')
            });
        }

         // if multiple todo items to be deleted
        else{
            for(let i of req.body.id){
                Todo.findByIdAndDelete(i, function(err){
                    if(err){
                        console.log("error in deleting the todo item");
                        return;
                    }
                    
                });
            }
            return res.redirect('back');
        }

    }