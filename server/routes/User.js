const express = require('express');
const routes = express.Router();

const { login, signup, order } = require('../controllers/Auth');

routes.post('/login', login);
routes.post('/signup', signup);
routes.post('/order', order);
module.exports = routes;

