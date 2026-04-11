import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Admin = sequelize.define('Admin', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false },
}, { tableName: 'admins', timestamps: true, underscored: true });

export default Admin;
