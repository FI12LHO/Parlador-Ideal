const express = require('express');
const userController = require('./controller/userController');
const postController = require('./controller/postController');
const route = express.Router();

// User
route.post('/user/read', userController.read);

route.post('/user/create', userController.create);

// Post
route.get('/post', postController.index);

route.post('/post/create', postController.create);

route.post('/post/update', postController.update);

route.post('/post/delete', postController.delete);

module.exports = route;