import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Appointment = sequelize.define('Appointment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  phone: { type: DataTypes.STRING(20), allowNull: false },
  email: { type: DataTypes.STRING(255) },
  message: { type: DataTypes.TEXT },
  service: { type: DataTypes.STRING(255) },
  status: { type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'), defaultValue: 'pending' },
}, { tableName: 'appointments', timestamps: true, underscored: true });

export default Appointment;
