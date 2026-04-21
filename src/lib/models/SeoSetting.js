import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const SeoSetting = sequelize.define('SeoSetting', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  page_key: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  title: { type: DataTypes.STRING(255), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  keywords: { type: DataTypes.TEXT, allowNull: true },
  og_title: { type: DataTypes.STRING(255), allowNull: true },
  og_description: { type: DataTypes.TEXT, allowNull: true },
  og_image: { type: DataTypes.STRING(500), allowNull: true },
  schema_json: { type: DataTypes.TEXT('long'), allowNull: true },
}, { tableName: 'seo_settings', timestamps: true, underscored: true });

export default SeoSetting;
