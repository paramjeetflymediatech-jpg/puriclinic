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

async function migrate() {
  try {
    const { syncDB, Blog, sequelize } = await import('../src/lib/models/index.js');
    await syncDB();
    await sequelize.query("UPDATE blogs SET author_slug = 'dr-gurinderjit-singh' WHERE author_slug IS NULL OR author_slug = ''");
    const blogs = await Blog.findAll({ attributes: ['id', 'title', 'slug', 'author_slug'] });
    console.log('✅ Blogs successfully migrated with author_slug:');
    console.log(blogs.map(b => b.toJSON()));
    process.exit(0);
  } catch (err) {
    console.error('❌ Migration error:', err);
    process.exit(1);
  }
}

migrate();
