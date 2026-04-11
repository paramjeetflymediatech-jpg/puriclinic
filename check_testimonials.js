import { Testimonial, syncDB } from './src/lib/models/index.js';

async function check() {
  try {
    const count = await Testimonial.count();
    console.log('Testimonial count:', count);
    const docs = await Testimonial.findAll();
    console.log('Testimonials:', JSON.stringify(docs, null, 2));
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

check();
