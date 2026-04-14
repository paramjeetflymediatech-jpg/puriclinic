import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Simple Env Loader ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFile = path.resolve(__dirname, '../.env');

if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const parts = trimmed.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  });
  console.log('✅ Environment variables loaded from .env');
}

async function main() {
  try {
    console.log('🚀 Starting Database Initialization...');

    // 1. Create Database if not exists
    const mysql = await import('mysql2/promise');
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
    });
    const dbName = process.env.DB_NAME || 'puri_clinic';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await connection.end();
    console.log(`✅ Database "${dbName}" ensured.`);

    // 2. Import models and seed data AFTER env is set
    const { syncDB, Admin, Doctor, Testimonial, Service, Blog } = await import('../src/lib/models/index.js');
    const { SERVICES, TESTIMONIALS, BLOGS } = await import('../src/data/seed.js');

    // 3. Sync Tables
    await syncDB();

    // 4. Create Default Admin
    const [admin, created] = await Admin.findOrCreate({
      where: { username: 'admin' },
      defaults: {
        password: 'password123' 
      }
    });

    if (created) {
      console.log('👤 Created default admin: admin / password123');
    } else {
      console.log('👤 Admin "admin" already exists.');
    }

    // 5. Seed Services (Categorized for Homepage)
    console.log('🧖 Seeding exclusive services...');
    
    // Homepage priority services
    const homepageServices = [
      {
        name: 'Hair Services',
        slug: 'hair-related-services',
        description: 'Access advanced treatment for receding hairlines and thinning bald spots.',
        image_url: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Hair-related-services-28.jpg',
        order: 1
      },
      {
        name: 'Skin Services',
        slug: 'skin-related-services',
        description: 'Take care of your face and appearance by opting for acne and pigmentation treatments.',
        image_url: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Skin-related-services-28.jpg',
        order: 2
      },
      {
        name: 'Vitiligo Treatment',
        slug: 'vitiligo-treatment',
        tagline: 'Reliable & Professional White Patch Treatment In Ludhiana',
        description: 'Advanced clinical solutions for vitiligo management and skin repigmentation.',
        about_markdown: 'Vitiligo is a long-term skin condition characterized by patches of the skin losing their pigment. The patches of skin affected become white and usually have sharp margins. The hair from the skin may also become white. The inside of the mouth and nose may also be involved. Typically both sides of the body are affected. Often the patches begin on areas of skin that are exposed to the sun. It is more noticeable in people with dark skin.\n\nAt Puri Skin Clinic, we specialize in multi-modal treatment strategies to arrest the progression and stimulate repigmentation using world-class technology.',
        treatment_types: JSON.stringify([
          { title: 'Non-Segmental Vitiligo', description: 'The most common form, appearing in symmetrical patches on both sides of the body.' },
          { title: 'Segmental Vitiligo', description: 'Typically appears at a younger age and affects only one side or segment of the body.' },
          { title: 'Mucosal Vitiligo', description: 'Primarily affects the mucous membranes of the mouth and/or the genitals.' },
          { title: 'Focal Vitiligo', description: 'Characterized by a few white patches in a small, localized area.' }
        ]),
        symptoms: JSON.stringify([
          'Patchy loss of skin color (depigmentation)',
          'Premature whitening or graying of hair',
          'Loss of color in the tissues that line the inside of mouth',
          'Loss of or change in color of the inner layer of the eyeball'
        ]),
        treatments: JSON.stringify([
          { title: 'Excimer Laser', description: 'Targeted UVB light therapy that treats only the affected patches without touching healthy skin.' },
          { title: 'NB-UVB Therapy', description: 'Narrowband Ultraviolet B light therapy for widespread vitiligo management.' },
          { title: 'Melanocyte Grafting', description: 'Surgical procedure where healthy pigment cells are transplanted to white patches.' },
          { title: 'Microneedling', description: 'Stimulating the skin naturally to encourage pigment production in localized areas.' }
        ]),
        custom_faq: JSON.stringify([
          { question: 'Is vitiligo contagious?', answer: 'No, vitiligo is an autoimmune condition and is not contagious. It cannot be spread from person to person.' },
          { question: 'Can vitiligo be cured completely?', answer: 'While there is no "cure" that prevents new patches from ever forming, modern treatments can highly effectively repigment existing patches.' },
          { question: 'Is the treatment painful?', answer: 'Most non-surgical treatments like Laser or NB-UVB are completely painless. Surgical options are performed under local anesthesia.' }
        ]),
        image_url: 'https://puriskinclinic.com/wp-content/uploads/2025/08/Vitiligo-cure-28.jpg',
        hero_image: 'https://images.unsplash.com/photo-1579154235828-451ae143b1d7?w=1920',
        order: 3
      },
      {
        name: 'Access Acne Treatment',
        slug: 'acne-treatment',
        description: 'Professional acne treatment programs for clear skin.',
        image_url: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800',
        order: 4
      },
      {
        name: 'Ensure Melasma Treatment',
        slug: 'melasma-treatment',
        description: 'Effective management for dark patches and hyperpigmentation.',
        image_url: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800',
        order: 5
      },
      {
        name: 'Undergo Facial Rejuvenation',
        slug: 'facial-rejuvenation',
        description: 'Range of procedures designed to restore a youthful appearance.',
        image_url: 'https://images.unsplash.com/photo-1524508762098-b7de3a6547e8?w=800',
        order: 6
      }
    ];

    for (const data of homepageServices) {
      await Service.upsert(data);
    }

    // Other services from seed.js
    for (const service of SERVICES) {
      if (!homepageServices.find(h => h.slug === service.slug)) {
        await Service.upsert({ ...service, order: 10 });
      }
    }
    console.log('✅ Services seeded.');

    // 6. Seed Testimonials
    console.log('💬 Seeding testimonials...');
    for (const t of TESTIMONIALS) {
      await Testimonial.findOrCreate({
        where: { author: t.author, review: t.review },
        defaults: t
      });
    }
    console.log('✅ Testimonials seeded.');

    // 7. Seed Blogs
    console.log('📝 Seeding blogs...');
    for (const b of BLOGS) {
      await Blog.findOrCreate({
        where: { slug: b.slug },
        defaults: b
      });
    }
    console.log('✅ Blogs seeded.');

    console.log('✨ Database Initialization Completed Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Initialization Failed:', err);
    process.exit(1);
  }
}

main();
