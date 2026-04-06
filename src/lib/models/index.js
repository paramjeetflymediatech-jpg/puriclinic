import sequelize from '../db';
import Service from './Service';
import Blog from './Blog';
import Appointment from './Appointment';
import Contact from './Contact';
import Testimonial from './Testimonial';

export { sequelize, Service, Blog, Appointment, Contact, Testimonial };

export async function syncDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Database sync failed:', error);
  }
}
