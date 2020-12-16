const Router = require('restify-router').Router;
const requestController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.patch('/meme', validateController.validateToken, requestController.updateMeme);

module.exports = routerInstance;