const { Router } = require('express');
const { validationsUser } = require('../middleware/validationsUser');
const userController = require('../controller/userController');

const route = Router();

route.post('/', validationsUser, userController.newUser);

module.exports = route;