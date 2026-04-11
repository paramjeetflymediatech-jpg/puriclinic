import { NextResponse } from 'next/server';
import { syncDB, Admin, Doctor, Testimonial } from '@/lib/models';

// A temporary setup route to initialize the tables and create the default admin
export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Ensure at least one admin exists
    const [admin, adminCreated] = await Admin.findOrCreate({
      where: { username: 'admin' },
      defaults: {
        password: 'password123' // Temporary default password
      }
    });

    // Seed Doctors if none exist
    const doctorCount = await Doctor.count();
    if (doctorCount === 0) {
      await Doctor.bulkCreate([
        {
          name: 'Dr. Gurinderjit Singh Puri',
          slug: 'dr-gurinderjit-singh',
          designation: 'Founder & Chief Dermatologist',
          degree: 'MBBS, MD - Dermatology',
          experience: '40+ Years',
          achievements: '<ul><li>Pioneer of Hair Transplantation in North India (1988)</li><li>Ex-President of IADVL Punjab</li><li>Recipient of Lifetime Achievement Award in Dermatology</li></ul>',
          bio: 'Dr. Gurinderjit Singh Puri is a legendary figure in dermatology in Punjab. With over 40 years of experience, he has established the clinic as a cornerstone of excellence.',
          image_url: '/dr-gurinderjit-singh.png',
          achievement_images: JSON.stringify(['/dr-gurinderjit-singh.png', '/dr-ashwajit-singh.png']),
          order: 1
        },
        {
          name: 'Dr. Ashwajit Singh',
          slug: 'dr-ashwajit-singh',
          designation: 'Advanced Aesthetic Specialist',
          degree: 'MD - Dermatology',
          experience: '10+ Years',
          achievements: '<ul><li>Specialist in Advanced Facial Aesthetics</li><li>Expert in Vitiligo & Melasma Treatments</li><li>Certified in Advanced Lasers</li></ul>',
          bio: 'Dr. Ashwajit Singh brings a modern, evidence-based approach to Puri Skin Clinic. Specializing in aesthetic procedures and complex skin conditions.',
          image_url: '/dr-ashwajit-singh.png',
          achievement_images: JSON.stringify(['/dr-ashwajit-singh.png', '/dr-gurinderjit-singh.png']),
          order: 2
        }
      ]);
    }

    // Seed Testimonials if none exist
    const testCount = await Testimonial.count();
    if (testCount === 0) {
      await Testimonial.bulkCreate([
        {
          author: 'Priya Sharma',
          rating: 5,
          review: 'Dr. Puri is truly an expert. I had been struggling with acne scars for years, and the results after just a few sessions were life-changing. Highly recommend!',
          source: 'Google'
        },
        {
          author: 'Amit Malhotra',
          rating: 5,
          review: 'The best hair restoration clinic in Ludhiana. Professional staff and state-of-the-art equipment. Very happy with the natural-looking results.',
          source: 'Google'
        },
        {
          author: 'Suman Kaur',
          rating: 5,
          review: 'Extremely satisfied with the laser treatment. Painless and effective. The clinic is very clean and maintains high hygiene standards.',
          source: 'Google'
        }
      ]);
      console.log('Testimonials seeded.');
    }

    return NextResponse.json({ message: 'Database setup and seeding completed successfully!' });
  } catch (error) {
    console.error('Setup failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
