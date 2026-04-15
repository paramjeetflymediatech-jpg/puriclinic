'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seo_settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      page_key: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        comment: 'Unique slug: home, about-us, services, doctors, contact-us, book-appointment, __schema__',
      },
      title: { type: Sequelize.STRING(100), allowNull: true },
      description: { type: Sequelize.STRING(300), allowNull: true },
      keywords: { type: Sequelize.TEXT, allowNull: true },
      og_title: { type: Sequelize.STRING(100), allowNull: true },
      og_description: { type: Sequelize.STRING(300), allowNull: true },
      og_image: { type: Sequelize.STRING(500), allowNull: true },
      // Stores global JSON-LD schema as JSON when page_key = '__schema__'
      schema_json: { type: Sequelize.TEXT('long'), allowNull: true },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('seo_settings');
  },
};
