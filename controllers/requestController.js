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
        }).then(function(response){
                return res.json(response.status, response.data);
            }).catch(function(error){
                return res.json(error.response.status, error.response.data);
            });
    },
    async createMeme(req, res) {
    
        let resposta = await Meme.create(req.body)
    
        return res.json(201, resposta);
    },
    async updateMeme(req, res) {
        const { titulo, descricao, ano } = req.body;
        const { id } = req.query;
        console.log(id)
        let resposta = await Meme.findByIdAndUpdate(id, { titulo, descricao, ano }, { new: true}, {useFindAndModify:false} )
    
        return res.json(200, resposta);
    },
    async searchMeme(req, res) {
        
        let { id } = req.query;
        
        let resposta;

        if (id) {
            resposta = await Meme.findById(id)
        } else {
            resposta = await Meme.find();
        }

        return res.json(200, resposta);
    },
}