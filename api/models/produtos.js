'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produtos.belongsTo(models.categorias, {
        foreignKey: 'categoria',
        type: DataTypes.INTEGER
      }),
      produtos.belongsTo(models.marcas, {
        foreignKey: 'marca',
        type: DataTypes.INTEGER
      }),
      produtos.belongsTo(models.fornecedores, {
        foreignKey: 'fornecedor',
        type: DataTypes.INTEGER
      })
    }
  }
  produtos.init({
    sku: DataTypes.STRING,
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    volume: DataTypes.ENUM,
    quantidade: DataTypes.INTEGER,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};