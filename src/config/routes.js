const express = require('express')

module.exports = function(server){


    // rotas da api
    const router = express.Router()
    server.use('/api', router)

    // rotas do TODO
    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
    /// a chamada vai ser /api/todos http://localhost:3003/api/todos
}
