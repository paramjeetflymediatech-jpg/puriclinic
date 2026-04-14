'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      designation: {
        type: Sequelize.STRING(255)
      },
      degree: {
        type: Sequelize.STRING(255)
      },
      experience: {
        type: Sequelize.STRING(100)
      },
      achievements: {
        type: Sequelize.TEXT
      },
      achievement_images: {
        type: Sequelize.TEXT
      },
      bio: {
        type: Sequelize.TEXT('long')
      },
      image_url: {
        type: Sequelize.STRING(500)
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      order: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('doctors');
  }
};
