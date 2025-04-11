const express = require('express');
require('dotenv').config()
const connect = require('./database/db')
const routes = require('./routes/routes')
const admin_routes = require('./routes/admin-routes')





const app = express()
app.use(express.json());
connect()
const port = process.env.PORT;
app.use('/concern',routes)
app.use('/admin' , admin_routes )

app.listen(port , () =>{
    console.log(`Server listening on ${port}`);
})