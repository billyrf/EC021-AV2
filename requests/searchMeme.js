const Router = require('restify-router').Router;
const requestController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.get('/meme', validateController.validateToken, requestController.searchMeme);

module.exports = routerInstance;