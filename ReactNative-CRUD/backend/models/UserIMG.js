const mongoose = require('../database/index')
const aws = require('aws-sdk')

const s3 = new aws.S3()

const ImgSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})


ImgSchema.pre('save', function () {
    if (!this.url) {
        this.url = `http://localhost:8009/files/${this.key}`
    }
})

ImgSchema.pre('remove', function () {
    // if (!this.url) {
    //     this.url = `http://localhost:8009/files/${this.key}`
    // }
    return s3.deleteObject({
        Bucket: 'upload-grupo-delta',
        key: this.key,
    }).promise()
})

// 'user ' e o nome do model, e UserSchema o Schema dele
const UserIMG = mongoose.model('UserIMG', ImgSchema)
module.exports = UserIMG