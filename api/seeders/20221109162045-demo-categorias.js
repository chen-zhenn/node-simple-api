'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('categorias', [{
        nome: 'Categoria A',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Categoria B',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Categoria C',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('categorias', null, {});
  }
};
