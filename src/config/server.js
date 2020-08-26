const port = 3003

const bodyParser = require('body-parser')

const express = require('express')
// iniciando o express
const server = express()

const allowCors = require('./cors')

// solicitando ao bodyparser que suporte mais tipos de dados da requisição
server.use(bodyParser.urlencoded({ extended : true }))

server.use(bodyParser.json())

server.use(allowCors)

server.listen(port, function(){
    console.log(`Backend esta rodando na porta ${port}.`)
})

module.exports = server