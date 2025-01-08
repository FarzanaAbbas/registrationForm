const express = require('express')            //1
const { registerUser, loginUser } = require('../controllers/signupCtrl')                    //don't type.

const signupRouter = express.Router()       // 2

//Route for user registration
signupRouter.post('/', registerUser)           // 3
signupRouter.post('/login', loginUser)          // 4

module.exports = signupRouter;                  //5