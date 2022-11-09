'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('marcas', [{
        nome: 'Bic',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Faber Castell',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Chamex',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('marcas', null, {});
  }
};
