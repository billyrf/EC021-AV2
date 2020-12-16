const Router = require('restify-router').Router;
const requestController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.post('/meme', validateController.validateToken, validateController.validateBody, requestController.createMeme);

module.exports = routerInstance;