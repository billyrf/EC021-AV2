require('dotenv').config();
const axios = require('axios');

module.exports = {
    validateToken(req, res, next) {
        const { headers } = req;
        const { token } = headers;
    
        if (!token) {
            return res.send(403,'Foneça o token para continuar');
        }
    
        const requestConfig = {
            headers
        };

        axios.post('https://ec021-av2-auth.herokuapp.com/auth/validateToken', requestConfig)
            .then((response) => {
                if (response.status == 401) {
                    return res.send(401, 'O Token fornecido é invalido' );
                }
    
                return next();
            })
            .catch((error) => {
                if (error.status == 401) {
                    return res.send(401, ' O Token fornecido é invalido');
                }
            });
        return next();
    },
    
    validateBody(req, res, next) {
        const { body } = req;
    
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