import { Doctor } from './src/lib/models';

async function seed() {
  try {
    await Doctor.destroy({ where: {} });
    
    await Doctor.create({
      name: 'Dr. Gurinderjit Singh Puri',
      slug: 'dr-gurinderjit-singh',
      designation: 'Founder & Chief Dermatologist',
      degree: 'MBBS, MD - Dermatology',
      experience: '40+ Years',
      achievements: '<ul><li>Pioneer of Hair Transplantation in North India (1988)</li><li>Ex-President of IADVL Punjab</li><li>Recipient of Lifetime Achievement Award in Dermatology</li></ul>',
      bio: 'Dr. Gurinderjit Singh Puri is a legendary figure in dermatology in Punjab. With over 40 years of experience, he has treated thousands of patients and is widely regarded as one of the best dermatologists in the region.',
      image_url: '/dr-gurinderjit-singh.png',
      order: 1
    });

    await Doctor.create({
      name: 'Dr. Ashwajit Singh',
      slug: 'dr-ashwajit-singh',
      designation: 'Advanced Aesthetic Specialist',
      degree: 'MD - Dermatology',
      experience: '10+ Years',
      achievements: '<ul><li>Specialist in Advanced Facial Aesthetics</li><li>Expert in Vitiligo & Melasma Treatments</li><li>Certified in Advanced Lasers</li></ul>',
      bio: 'Dr. Ashwajit Singh brings a modern, evidence-based approach to Puri Skin Clinic. Specializing in aesthetic procedures and complex skin conditions, he ensures patients receive the most advanced care available.',
      image_url: '/dr-ashwajit-singh.png',
      order: 2
    });

    console.log('Database seeded with doctor data.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();
