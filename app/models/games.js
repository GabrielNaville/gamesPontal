const mongoose = require('../database')
const GamesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    descricao: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    companhia: {
        type: String,
        required: true
    },
    dataCriacao:{
        type: Date,
        default: Date.now
    },
    dataAlteracao:{
        type: Date,
        required: false
    }
});

const games = mongoose.model('Games', GamesSchema)

module.exports = games;
