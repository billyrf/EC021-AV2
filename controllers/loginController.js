require('dotenv').config();
const axios = require('axios');

module.exports = {
    login(req, res, next) {
        const { body } = req;

        function isNotNullUndefined(obj) {
            return obj !== null && obj !== undefined;
        }

        if (isNotNullUndefined(body)) {

            const { username, password } = body

            axios.post('https://ec021-av2-auth.herokuapp.com/auth/login', {
            username,
            password

        }).then((response) => {
                return res.json(response.status, response.data);
            }).catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
        } else {
            res.send(403, 'Favor fornecer o body "username" : "<username>" e "password" : "<password>"');
        }
        
    }

}