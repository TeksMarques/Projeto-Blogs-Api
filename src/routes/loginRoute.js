const { Router } = require('express');
const { validationLogin } = require('../middleware/validationsLogin');
const loginController = require('../controller/loginController');

const route = Router();

route.post('/', validationLogin, loginController.newUser);

module.exports = route;