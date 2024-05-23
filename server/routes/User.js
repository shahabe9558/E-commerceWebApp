const express = require('express');
const routes = express.Router();

const { testingSign } = require('../controllers/testing');
const {signup} = require('../controllers/signup');
const { login } = require('../controllers/login');
const {order} = require('../controllers/Order');


routes.post('/signup', signup);
routes.post('/testing', testingSign);
routes.post('/login', login);
routes.post('/order', order);
module.exports = routes;

