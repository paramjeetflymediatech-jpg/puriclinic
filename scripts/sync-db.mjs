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
    console.log('🚀 Starting Database Synchronization...');

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

    // 2. Import sync function AFTER env is set
    const { syncDB } = await import('../src/lib/models/index.js');

    // 3. Sync Tables
    await syncDB();

    console.log('✨ Database Synchronization Completed Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Synchronization Failed:', err);
    process.exit(1);
  }
}

main();
