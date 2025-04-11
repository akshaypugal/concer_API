const express = require('express');
const {deleteByID , UpdateByID , add , getAll,getByID} = require('../controller/controler')


const routes = express.Router()

routes.get('/' , getAll );
routes.get('/:id' , getByID );
routes.post('/add' , add);
routes.put('/update/:id' , UpdateByID );
routes.delete('/delete/:id' , deleteByID )

module.exports = routes