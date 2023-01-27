const { Router } = require('express');
const { validateToken } = require('../middleware/validationToken');
const categoryController = require('../controller/categoryController');

const route = Router();

route.post('/', validateToken, categoryController.newCategory);

module.exports = route;