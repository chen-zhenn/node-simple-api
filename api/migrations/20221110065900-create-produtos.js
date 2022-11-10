'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preco: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      volume: {
        allowNull: false,
        type: Sequelize.ENUM('unidade','caixa','pacote')
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imagem: {
        type: Sequelize.STRING
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'categorias', key: 'id' }
      },
      marca_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'marcas', key: 'id' }
      },
      fornecedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'fornecedores', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};