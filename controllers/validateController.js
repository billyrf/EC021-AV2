require('dotenv').config();
const axios = require('axios');

module.exports = {
    async validateToken(req, res, next) {
        let { headers } = req;
        let { token } = headers;

        if (!token) {
            return res.send(403,{msg:'Forneça o token para continuar'});
        }
        return next();
    },
    async validateBody(req, res, next) {
        let { body } = req;
    
        if (verifyBody(body)) {
            next();
        } else {
            res.send(403,{msg: 'Favor fornecer o body para esta request'});
        }
    
        function verifyBody(obj) {
            return obj !== null && obj !== undefined;
        }
    } 
}