'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('fornecedores', [{
        nome: 'Fornecedor A',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Fornecedor B',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Fornecedor C',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('fornecedores', null, {});
  }
};
