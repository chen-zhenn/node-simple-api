'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('produtos', [{
        sku: '123456',
        nome: 'Caneta Esferográfica Azul',
        preco: 47.99,
        volume: 'caixa',
        quantidade: 5,
        imagem: 'https://url/path-image-prod-caneta-esferográfica-azul-bic-caixa.jpg',
        categoria: 2,
        marca: 1,
        fornecedor: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        sku: '789012',
        nome: 'Folha de sulfite',
        preco: 29.90,
        volume: 'pacote',
        quantidade: 50,
        imagem: 'https://url/path-image-prod-sulfite-pacote.jpg',
        categoria: 2,
        marca: 3,
        fornecedor: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        sku: '456789',
        nome: 'Marca Texto',
        preco: 13.00,
        volume: 'unidade',
        quantidade: 20,
        imagem: 'https://url/path-image-prod-marca-texto-unidade.jpg',
        categoria: 2,
        marca: 2,
        fornecedor: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        sku: '194795',
        nome: 'Caneta Esferográfica Azul',
        preco: 48.79,
        volume: 'caixa',
        quantidade: 5,
        imagem: 'https://url/path-image-prod-caneta-esferográfica-azul-fabercastell-caixa.jpg',
        categoria: 2,
        marca: 2,
        fornecedor: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('produtos', null, {});
  }
};
