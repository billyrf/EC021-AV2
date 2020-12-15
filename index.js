require('dotenv').config();
const restify = require('restify');
const mongoose = require('mongoose');
const DB = require('./dbConfiguration');
const loginRouter = require('./requests/login');
const server = restify.createServer();

loginRouter.applyRoutes(server);

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(process.env.PORTA, function () {
    console.log("Servidor rodando...");

    mongoose.connect(DB.URL, DB.CONFIG, function (error) {
        if (!error) {
            console.log('Conctado ao banco');
        } else {
            console.log('Erro ao conectar no MongoDB:'+ error);
        }
    });
});