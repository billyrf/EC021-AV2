require('dotenv').config();
const axios = require('axios');

module.exports = {
    async validateToken(req, res, next) {
        let { headers } = req;
        let { token } = headers;

        if (!token) {
            return res.send(403,'Forneça o token para continuar');
        }

        // axios.post('https://ec021-av2-auth.herokuapp.com/auth/validateToken',{token})
        // .then((response) => {
        //     return res.json(response.status, response.data);
        // }).catch((error) => {
        //     return res.json(error.response.status, error.response.data);
        // });
        return next();
    },
    async validateBody(req, res, next) {
        let { body } = req;
    
        if (verifyBody(body)) {
            next();
        } else {
            res.send(403, 'Favor fornecer o body para esta request');
        }
    
        function verifyBody(obj) {
            return obj !== null && obj !== undefined;
        }
    } 
}