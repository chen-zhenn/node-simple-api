'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fornecedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fornecedor.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fornecedores',
  });
  return fornecedor;
};