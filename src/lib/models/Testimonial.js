import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Testimonial = sequelize.define('Testimonial', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: { type: DataTypes.STRING(255), allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 5 },
  review: { type: DataTypes.TEXT },
  source: { type: DataTypes.STRING(100), defaultValue: 'Google' },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'testimonials', timestamps: true, underscored: true });

export default Testimonial;
