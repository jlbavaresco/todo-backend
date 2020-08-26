// armazenando em uma varaivel para pode passar como parametro para a função de routes
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)