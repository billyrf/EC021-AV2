const Router = require('restify-router').Router;
const requestController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.del('/meme', validateController.validateToken, requestController.deleteMeme);

module.exports = routerInstance;