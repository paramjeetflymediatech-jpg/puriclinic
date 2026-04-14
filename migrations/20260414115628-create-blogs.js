'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true
      },
      excerpt: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT('long')
      },
      language: {
        type: Sequelize.ENUM('en', 'hi'),
        defaultValue: 'en'
      },
      image_url: {
        type: Sequelize.STRING(500)
      },
      is_published: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogs');
  }
};
