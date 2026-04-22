import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Simple Env Loader ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFile = path.resolve(__dirname, '../.env');

console.log('process.env.DB_HOST', process.env.DB_HOST,envFile);
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
console.log('process.env.DB_HOST', process.env);

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
    const dbName = process.env.DB_NAME || 'puriclinic';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await connection.end();
    console.log(`✅ Database "${dbName}" ensured.`);

    // 2. Import models and seed data AFTER env is set
    const { syncDB, Admin } = await import('../src/lib/models/index.js');


    // 3. Sync Tables
    await syncDB();

    // 4. Create Default Admin
    const { default: bcrypt } = await import('bcryptjs');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'password123', salt);

    const [admin, created] = await Admin.findOrCreate({
      where: { username: process.env.ADMIN_USERNAME || 'admin', email: process.env.ADMIN_EMAIL || 'admin@yopmail.com' },
      defaults: {
        password: hashedPassword
      }
    });
    if (created) {
      console.log('👤 Created default admin: admin / password123',created);
    } else {
      console.log('👤 Admin "admin" already exists.');
    }

    console.log('✨ Database Initialization Completed Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Initialization Failed:', err);
    process.exit(1);
  }
}

main();
