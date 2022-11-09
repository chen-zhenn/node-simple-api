const bodyParser = require('body-parser')
const categoriaRoute = require('./categoria-route')

module.exports = app => {
    console.log("Rotas carregado com sucesso!")
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json()) 
    app.use(categoriaRoute)
}