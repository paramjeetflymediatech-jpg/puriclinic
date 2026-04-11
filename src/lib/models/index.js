import sequelize from '../db';
import Service from './Service';
import Blog from './Blog';
import Appointment from './Appointment';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Admin from './Admin';
import Category from './Category';
import SuccessStory from './SuccessStory';
import Doctor from './Doctor';

export { sequelize, Service, Blog, Appointment, Contact, Testimonial, Admin, Category, SuccessStory, Doctor };

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
