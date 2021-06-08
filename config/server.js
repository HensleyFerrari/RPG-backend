const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const server = express()
const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/rpg', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/api', require('./routes'))

server.listen(port, () =>{
    console.log(`Backend is running on port ${port}`)
})