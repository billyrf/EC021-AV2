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
        }).then(function (response) {
            return res.json(response.status, response.data);
        }).catch(function (error) {
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

        if (!id) {
            return res.send('Favor adicionar o ID do meme a ser alterado')
        } else {
            await Meme.findByIdAndUpdate(id, { titulo, descricao, ano }, function (err, doc) {
                if (err) {
                    return res.json(404, 'Verifique se o ID é válido ou existe')
                }
                return res.json(200, doc);
            });
        }

    },
    async searchMeme(req, res) {
        let { id } = req.query;
        let resposta;

        if (id) {
            await Meme.findById(id, function (err, doc) {
                if (err) {
                    return res.json(404, 'Verifique se o ID é válido ou existe')
                }
                return res.json(200, doc);
            });
        } else {
            resposta = await Meme.find();
        }

        return res.json(200, resposta);
    },
    async deleteMeme(req, res) {
        const { id } = req.query;

        if (!id) {

            return res.send('Favor adicionar o ID do meme a ser deletado')

        } else if (id == 'all') {

            let respostaAll = {
                Informações: await Meme.deleteMany()
            }
            return res.json(200, respostaAll);

        } else {

            await Meme.findByIdAndDelete(id, function (err, doc) {
                if (err) {
                    return res.json(404, 'Verifique se o ID é válido ou existe')
                }
                return res.json(200, doc);
            });

        }

    }
}