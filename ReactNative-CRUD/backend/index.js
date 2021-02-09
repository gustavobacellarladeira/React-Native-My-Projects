require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

//rotas
const rotaUser = require('./routes/user.js')


const app = express()
app.use(express.urlencoded({ extended: true }))
// para entender json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/files', express.static(path.resolve(__dirname, "temp", "uploads")))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// mongodb
require('./database/index')

// routes
app.use('/user', rotaUser)


app.get('/', async (req, res) => {
    return res.send({ msg: "Essa é uma api para testes" })
})

// quando nao encontar rota
app.use((req, res, next) => {
    const erro = new Error('Rota nao enncontrada')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})


// porta de saida do express
const porta = 3020
app.listen(process.env.PORT || porta, () => { console.log(`Servidor executando com sucesso na porta: ${porta}`) })