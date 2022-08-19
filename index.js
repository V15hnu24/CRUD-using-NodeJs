const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/new'
const app = express();
app.use(express.json())

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection

con.on('open', () => {
    console.log('connected to mongoose')
})

const alienRouter = require('./routes/alien')
app.use('/alien',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})