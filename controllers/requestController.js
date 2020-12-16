require('dotenv').config();
const axios = require('axios');
const Meme = require('../models/meme');

module.exports = {
    async login(req, res) {
        let { body } = req;
        let { username, password } = body

        axios.post('https://ec021-av2-auth.herokuapp.com/auth/login', {
            username,
            password
        }).then((response) => {
                return res.json(response.status, response.data);
            }).catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
    },
    async createMeme(req, res) {
    
        let resposta = await Meme.create(req.body)
    
        return res.json(201, resposta);
    }
}