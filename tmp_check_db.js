const { Doctor, syncDB } = require('./src/lib/models');

async function check() {
  try {
    await syncDB();
    const count = await Doctor.count();
    console.log('Doctor count:', count);
    const docs = await Doctor.findAll();
    console.log('Doctors:', JSON.stringify(docs, null, 2));
    process.exit(0);
  } catch (err) {
    console.error('Error during DB check:', err);
    process.exit(1);
  }
}

check();
