const { Router } = require('express');
const { validationsUser } = require('../middleware/validationsUser');
const { validateToken } = require('../middleware/validationToken');
const userController = require('../controller/userController');

const route = Router();

route.post('/', validationsUser, userController.newUser);
route.get('/', validateToken, userController.allUsers);
route.get('/:id', validateToken, userController.userId);

module.exports = route;