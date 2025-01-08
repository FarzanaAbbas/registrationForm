// mongodb+srv://farzu502:farzu0716@cluster0.lzxg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose')

function RunServer () {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = RunServer