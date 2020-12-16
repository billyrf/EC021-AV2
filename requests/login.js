const Router = require('restify-router').Router;
const loginController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.post('/auth/login', validateController.validateBody , loginController.login);

module.exports = routerInstance;