const { Schema, model } = require('mongoose');

const Meme = new Schema(
    {
        lote: String,
        conteudo: Number,
        validade: String
    },
    {
        timestamps: true 
    }
);

module.exports = model('Meme', Meme);