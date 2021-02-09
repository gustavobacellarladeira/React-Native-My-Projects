require('dotenv').config()

// mongodb://localhost:27017/alunos
const mongoose = require('mongoose')
const url = process.env.MONGO_URL
// conectando ao banco de dados
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
        console.log("( MONGODB ) BANCO DE DADOS, CONECTADO COM SUCESO!!!")

    })


mongoose.Promise = global.Promise

module.exports = mongoose