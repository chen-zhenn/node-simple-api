const bodyParser = require('body-parser')
const categoriaRoute = require('./categoria-route')
const marcaRoute = require('./marca-route')
const fornecedorRoute = require('./fornecedor-route')
const enderecoRoute = require('./endereco-route')
const produtoRoute = require('./produto-route')

module.exports = app => {
    app.use([
        bodyParser.urlencoded({extended: true}),
        bodyParser.json()
    ])  
    app.use([
        categoriaRoute,
        marcaRoute,
        fornecedorRoute,
        enderecoRoute,
        produtoRoute
    ])
}