const express = require('express');
const routes = express.Router();

const {order} = require('../controllers/Auth');
const { testingSign } = require('../controllers/testing');
const {signup} = require('../controllers/signup');
const { login } = require('../controllers/login');


routes.post('/signup', signup);
routes.post('/testing', testingSign);
routes.post('/login', login);
routes.post('/order', order);
module.exports = routes;

