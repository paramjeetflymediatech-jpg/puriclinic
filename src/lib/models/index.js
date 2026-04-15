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
    console.log('Database synced successfully with { alter: true }.');
  } catch (error) {
    console.error('Database sync failed critically:', error);
    throw error;
  }
}
