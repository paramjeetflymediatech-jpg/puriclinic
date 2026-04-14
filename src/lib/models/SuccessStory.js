import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const SuccessStory = sequelize.define('SuccessStory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    defaultValue: 'skin', // e.g., 'skin', 'hair', 'laser'
  },
  media_type: {
    type: DataTypes.ENUM('image', 'video'),
    defaultValue: 'image',
  },
  image_url: { // Renamed internally to media_url for clarity if we wanted, but keeping image_url to avoid major refactors
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
}, {
  tableName: 'success_stories',
  timestamps: true,
});

export default SuccessStory;
