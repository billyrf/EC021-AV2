const Router = require('restify-router').Router;
const loginController = require('../controllers/requestController');
const validateController = require('../controllers/validateController');

const routerInstance = new Router();

routerInstance.post('/meme', validateController.validateToken, validateController.validateBody  ,loginController.createMeme);

module.exports = routerInstance;