const mongoose = require('mongoose');
require('dotenv').config()
const DB = process.env.DB_URL
const connect = () =>{
     try {
         mongoose.connect(DB);
         console.log('MongoDB connected');
     } catch (error) {
         console.log('Unable to connect with mongodb');
     }
}


module.exports = connect