import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Service = sequelize.define('Service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  slug: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  category: { type: DataTypes.ENUM('hair', 'skin', 'other'), defaultValue: 'skin' },
  description: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING(500) },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'services', timestamps: true, underscored: true });

export default Service;
