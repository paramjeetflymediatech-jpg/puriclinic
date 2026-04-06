import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Contact = sequelize.define('Contact', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  phone: { type: DataTypes.STRING(20) },
  email: { type: DataTypes.STRING(255) },
  message: { type: DataTypes.TEXT },
}, { tableName: 'contacts', timestamps: true, underscored: true });

export default Contact;
