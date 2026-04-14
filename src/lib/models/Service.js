import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Service = sequelize.define('Service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  slug: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  category: { type: DataTypes.ENUM('hair', 'skin', 'other'), defaultValue: 'skin' },
  description: { type: DataTypes.TEXT },
  tagline: { type: DataTypes.STRING(500) },
  about_markdown: { type: DataTypes.TEXT },
  treatment_types: { type: DataTypes.TEXT }, // JSON: [{title, description, image}]
  symptoms: { type: DataTypes.TEXT },        // JSON: [string] or [{title, description}]
  treatments: { type: DataTypes.TEXT },      // JSON: [{title, description, icon}]
  custom_faq: { type: DataTypes.TEXT },      // JSON: [{question, answer}]
  image_url: { type: DataTypes.STRING(500) },
  hero_image: { type: DataTypes.STRING(500) },
  gallery_images: { type: DataTypes.TEXT }, // Stored as JSON string
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'services', timestamps: true, underscored: true });

export default Service;
