const { Router } = require('express');
const { validationsUser } = require('../middleware/validationsUser');
const { validateToken } = require('../middleware/validationToken');
const userController = require('../controller/userController');

const route = Router();

route.post('/', validationsUser, userController.newUser);
route.get('/', validateToken, userController.allUsers);

module.exports = route;