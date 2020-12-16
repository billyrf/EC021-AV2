require('dotenv').config();
const axios = require('axios');

module.exports = {
    async validateToken(req, res, next) {
        let { headers } = req;
        let { token } = headers;
        let config = req.headers.token;

        if (!token) {
            return res.send(403,{msg:'Forneça o token para continuar'});
        }

        // axios.post('https://ec021-av2-auth.herokuapp.com/auth/validateToken', config)
        // .then(function (response) {
        //     return res.json(response.status, response.data);
        // })
        // .catch(function (error) {
        //     console.log(config)
        //     return res.json(error.response.status, error.response.data);
        // });
        
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