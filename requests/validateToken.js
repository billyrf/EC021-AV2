const Router = require('restify-router').Router;
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.post('/auth/validateToken', validateController.validateToken);

module.exports = routerInstance;