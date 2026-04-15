'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('testimonials', 'google_review_id', {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true,
      after: 'is_active',
    });
    await queryInterface.addColumn('testimonials', 'avatar_url', {
      type: Sequelize.STRING(500),
      allowNull: true,
      after: 'google_review_id',
    });
    await queryInterface.addColumn('testimonials', 'profile_url', {
      type: Sequelize.STRING(500),
      allowNull: true,
      after: 'avatar_url',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('testimonials', 'google_review_id');
    await queryInterface.removeColumn('testimonials', 'avatar_url');
    await queryInterface.removeColumn('testimonials', 'profile_url');
  },
};
