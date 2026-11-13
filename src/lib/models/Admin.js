import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import bcrypt from 'bcryptjs';

const Admin = sequelize.define('Admin', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  email: { type: DataTypes.STRING(255), allowNull: true, defaultValue: 'admin@puriskinclinic.com' },
  password: { type: DataTypes.STRING(255), allowNull: false },
}, { 
  tableName: 'admins', 
  timestamps: true, 
  underscored: true,
  hooks: {
    beforeSave: async (admin) => {
      if (admin.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(admin.password, salt);
      }
    }
  }
});

// Method to verify password
Admin.prototype.validPassword = async function(password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    if (isMatch) return true;
  } catch (err) {
    // Password might not be bcrypt hashed yet
  }
  return this.password === password;
};

export default Admin;
