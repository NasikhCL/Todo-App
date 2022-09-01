const express = require('express');

// Setup router
const router = express.Router();    


// Setting path for controller function
const homeController = require('../controllers/home_controller');

// Setting controller function to a route
router.get('/', homeController.home);

console.log('router is loaded');

// Route all requests starting with '/action' to action.js file
router.use('/actions',require('./actions'))

// Exporting router
module.exports=router;