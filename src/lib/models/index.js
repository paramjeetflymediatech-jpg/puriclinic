import sequelize from '../db.js';
import Service from './Service.js';
import Blog from './Blog.js';
import Appointment from './Appointment.js';
import Contact from './Contact.js';
import Testimonial from './Testimonial.js';
import Admin from './Admin.js';
import Category from './Category.js';
import SuccessStory from './SuccessStory.js';
import Doctor from './Doctor.js';
import SeoSetting from './SeoSetting.js';

export { sequelize, Service, Blog, Appointment, Contact, Testimonial, Admin, Category, SuccessStory, Doctor, SeoSetting };

export async function syncDB() {
  try {
    console.log('Starting database authentication...');
    await sequelize.authenticate();
    console.log('Authentication successful. Starting sync...');
    await sequelize.sync({ alter: true });
    
    // Manual fallback for columns if alter:true missed them
    const [results] = await sequelize.query("SHOW COLUMNS FROM blogs LIKE 'meta_title'");
    if (results.length === 0) {
      console.log('Manually adding missing SEO columns to blogs table...');
      await sequelize.query("ALTER TABLE blogs ADD COLUMN meta_title TEXT NULL");
      await sequelize.query("ALTER TABLE blogs ADD COLUMN meta_description TEXT NULL");
      await sequelize.query("ALTER TABLE blogs ADD COLUMN meta_keywords TEXT NULL");
      await sequelize.query("ALTER TABLE blogs ADD COLUMN meta_schema TEXT NULL");
    }

    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Database sync failed critically:', error);
    throw error;
  }
}
