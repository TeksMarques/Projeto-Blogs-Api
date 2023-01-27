const { Router } = require('express');
const { validateToken } = require('../middleware/validationToken');
const categoryController = require('../controller/categoryController');

const route = Router();

route.post('/', validateToken, categoryController.newCategory);
route.get('/', validateToken, categoryController.getAllCategories);

module.exports = route;