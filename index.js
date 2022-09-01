const express = require('express');

 
const port = 8000;

const db = require('./config/mongoose');

const app = express();

// setup the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended: false}));

// use exprescs router
app.use('/',require('./routers'));

app.use(express.static('assets'));

/*
app.get('/', function(req,res) {
    
    return res.render('index',{
        title: "todo-list"
    })
    // return res.end('<h1>hii all</h1>')
    
});

*/



app.listen(port , function(err) {
    if(err){
        console.log(`Error loading server ${err}`);
    }
    console.log(`server running in port : ${port}`);
    
});
 