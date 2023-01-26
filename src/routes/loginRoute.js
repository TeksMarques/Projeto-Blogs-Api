const { Router } = require('express');
const { validationLogin } = require('../services/validationsLogin');
const loginController = require('../controller/loginController');

const route = Router();

route.post('/', validationLogin, loginController.newUser);

module.exports = route;