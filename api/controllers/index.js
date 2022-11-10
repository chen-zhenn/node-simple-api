const categoria = require('./Categoria-controller')
const marca = require('./Marca-controller')
const fornecedor = require("./Fornecedor-controller")
const endereco = require('./Endereco-controller')
const produto = require('./Produto-controller')

module.exports = { 
    categoria,
    marca,
    fornecedor,
    endereco,
    produto
}

