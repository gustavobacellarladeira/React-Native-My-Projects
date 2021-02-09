const mongoose = require('../database/index')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    endereco: {
        type: String,

    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})


// 'user ' e o nome do model, e UserSchema o Schema dele
const Aluno = mongoose.model('Aluno ', UserSchema)
module.exports = Aluno 