'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('doctors', 'bio_part2', {
      type: Sequelize.TEXT('long'),
      allowNull: true,
      after: 'bio'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('doctors', 'bio_part2');
  }
};
