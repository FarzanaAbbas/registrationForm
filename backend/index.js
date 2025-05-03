require('dotenv').config()
const express = require('express')                //1
const cors = require('cors');                   //8
const RunServer = require('./database/connection');
const signupRouter = require('./routes/signupRoutes');

const app = express();                   //2
const port = 8000;                        //3

//use env
RunServer()                 //4

app.use(express.json())           //5
app.use(cors())                  //6

//app.use(): This function is used in Express.js to mount middleware functions at a specific path. Middleware functions can perform a variety of tasks, such as modifying requests and responses or ending the request-response cycle.
app.use('/api/user', signupRouter)

app.listen(port, () => {                                        //7
    console.log(`server is running on port ${port}`)
})

