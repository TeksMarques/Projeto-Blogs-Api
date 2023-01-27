const { Router } = require('express');
const { validateToken } = require('../middleware/validationToken');
const postController = require('../controller/postController');

const route = Router();

route.get('/', validateToken, postController.getAll);

module.exports = route;