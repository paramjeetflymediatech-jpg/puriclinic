'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if admin already exists to avoid unique constraint error
    const [admins] = await queryInterface.sequelize.query(
      `SELECT id FROM admins WHERE username = 'admin' LIMIT 1;`
    );

    if (admins.length === 0) {
      return queryInterface.bulkInsert('admins', [{
        username: 'admin',
        password: 'password123',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('admins', { username: 'admin' }, {});
  }
};
