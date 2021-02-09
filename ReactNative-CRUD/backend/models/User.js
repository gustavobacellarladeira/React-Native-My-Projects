const mongoose = require('../database/index')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

// incripta a senha
UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})


// 'user ' e o nome do model, e UserSchema o Schema dele
const User = mongoose.model('User', UserSchema)
module.exports = User