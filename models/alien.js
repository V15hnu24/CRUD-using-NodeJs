const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    mobile:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('alien', alienSchema)