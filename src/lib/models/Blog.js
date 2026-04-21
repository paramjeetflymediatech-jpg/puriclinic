import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Blog = sequelize.define('Blog', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(500), allowNull: false },
  slug: { type: DataTypes.STRING(500), allowNull: false, unique: true },
  excerpt: { type: DataTypes.TEXT },
  content: { type: DataTypes.TEXT('long') },
  language: { type: DataTypes.ENUM('en', 'hi'), defaultValue: 'en' },
  image_url: { type: DataTypes.STRING(500) },
  meta_title: { type: DataTypes.TEXT, allowNull: true },
  meta_description: { type: DataTypes.TEXT, allowNull: true },
  meta_keywords: { type: DataTypes.TEXT, allowNull: true },
  meta_schema: { type: DataTypes.TEXT, allowNull: true },
  is_published: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'blogs', timestamps: true, underscored: true });

export default Blog;
