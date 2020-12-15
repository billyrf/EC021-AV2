const Router = require('restify-router').Router;
const loginController = require('../controllers/loginController');

const routerInstance = new Router();

routerInstance.post('/login', loginController.login);

module.exports = routerInstance;