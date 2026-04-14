'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('\x1b[36m%s\x1b[0m', '🚀 Starting Admin Seeding Migration...');

    try {
      // Check if admin already exists to avoid unique constraint error
      const [admins] = await queryInterface.sequelize.query(
        `SELECT id FROM admins WHERE username = 'admin' LIMIT 1;`
      );

      if (admins.length === 0) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);

        await queryInterface.bulkInsert('admins', [{
          username: 'admin',
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date()
        }]);

        console.log('\x1b[32m%s\x1b[0m', '✅ SUCCESS: Default admin account created (admin / password123)');
      } else {
        console.log('\x1b[33m%s\x1b[0m', 'ℹ️  INFO: Admin account "admin" already exists. Skipping insertion.');
      }
    } catch (error) {
      console.error('\x1b[31m%s\x1b[0m', '❌ ERROR: Failed to seed admin account:');
      console.error(error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('admins', { username: 'admin' }, {});
  }
};
