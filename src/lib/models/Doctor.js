import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Doctor = sequelize.define('Doctor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  slug: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  designation: { type: DataTypes.STRING(255) },
  degree: { type: DataTypes.STRING(255) },
  experience: { type: DataTypes.STRING(100) },
  achievements: { type: DataTypes.TEXT }, // Can store HTML or JSON string
  achievement_images: { type: DataTypes.TEXT }, // Stores a stringified JSON array of image URLs
  bio: { type: DataTypes.TEXT('long') },
  image_url: { type: DataTypes.STRING(500) },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
  order: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { tableName: 'doctors', timestamps: true, underscored: true });

export default Doctor;
