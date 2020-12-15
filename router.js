const Router = require('restify-router').Router;
import { login, validateBody} from './controllers/controller';

export const HTTPMethod = new Router();

HTTPMethod.post('/login', validateBody, login);