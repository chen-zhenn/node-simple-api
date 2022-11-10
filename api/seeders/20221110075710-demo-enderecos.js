'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('enderecos', [{
        cep: '01415002',
        logradouro: 'Rua Bela Cintra',
        numero: '866',
        bairro: 'Consolação',
        cidade: 'São Paulo',
        estado: 'SP',
        fornecedor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        cep: '01311100',
        logradouro: 'Av. Paulista',
        numero: '807',
        bairro: 'Jardim Paulista',
        cidade: 'São Paulo',
        estado: 'SP',
        fornecedor_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        cep: '03456000',
        logradouro: 'Av. Rio das Pedras',
        numero: '555',
        bairro: 'Jardim Aricanduva',
        cidade: 'São Paulo',
        estado: 'SP',
        fornecedor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('enderecos', null, {});
  }
};
