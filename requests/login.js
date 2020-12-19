const Router = require('restify-router').Router;
const requestController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.post('/auth/login', validateController.validateBody, requestController.login);

module.exports = routerInstance;