const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerConfig = require('../config/multer')
const Aluno = require('../models/Aluno')

// inicio
router.get('/', (req, res) => {
    res.send({ msg: "voce esta na rota user" })
})

// pegar alunos
router.get('/aluno', async (req, res) => {
    const aluno = await Aluno.find()
    return res.send(aluno)
})

// Criar aluno
router.post('/aluno', multer(multerConfig).single('file'), async (req, res) => {
    // const { location: url = "" } = req.file
    try {
        const aluno = await Aluno.create({
            name: req.body.name,
            endereco: req.body.endereco,
            image: req.body.image,

        })
        return res.send(aluno)
    } catch (err) {
        return res.status(400).send({ err: "Erro ao criar aluno!" })
    }
})

// Criar aluno
router.put('/aluno/:id', multer(multerConfig).single('file'), async (req, res) => {
    // const { location: url = "" } = req.file
    // console.log(req.file)
    try {
        const aluno = await Aluno.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                endereco: req.body.endereco,
                image: req.body.image,
            }, { new: true }
        )
        await aluno.save()
        return res.send({ aluno })
    } catch (err) {
        return res.status(400).send({ err: "Erro ao criar aluno!" })
    }
})

// Deletar Aluno
router.delete('/aluno/:id', multer(multerConfig).single('file'), async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id)
        await aluno.remove()
        return res.send({ message: "Deletado com sucesso!" })

    } catch (err) {
        return res.status(400).send({ err: "Nao existe usuario com esse id!" })
    }

})

module.exports = router