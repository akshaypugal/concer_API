const express = require('express');
const admin_routes = express.Router();
const adminAssign = require('../controller/controler')
const updateStatus = require('../controller/controler')

admin_routes.put('/assign/:id' , adminAssign.adminAssign );
admin_routes.put('/status/:id' , updateStatus.updateStatus)


module.exports = admin_routes;