require('dotenv').config()
const express = require('express')
const cors = require('cors');
const RunServer = require('./database/connection');
const signupRouter = require('./routes/signupRoutes');

const app = express();
const port = 8000;

//use env
RunServer()

app.use(express.json())
app.use(cors())

//app.use(): This function is used in Express.js to mount middleware functions at a specific path. Middleware functions can perform a variety of tasks, such as modifying requests and responses or ending the request-response cycle.
app.use('/api/user', signupRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

