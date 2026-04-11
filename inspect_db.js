import sequelize from './src/lib/db.js';

async function inspectTable() {
  try {
    const [results] = await sequelize.query('DESCRIBE doctors');
    console.log('Table Structure:');
    console.table(results);
    process.exit(0);
  } catch (err) {
    console.error('Inspection failed:', err);
    process.exit(1);
  }
}

inspectTable();
