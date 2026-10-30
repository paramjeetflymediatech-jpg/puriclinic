import { syncDB, Blog, sequelize } from '../src/lib/models/index.js';

async function migrate() {
  try {
    await syncDB();
    await sequelize.query("UPDATE blogs SET author_slug = 'dr-gurinderjit-singh' WHERE author_slug IS NULL OR author_slug = ''");
    const blogs = await Blog.findAll({ attributes: ['id', 'title', 'slug', 'author_slug'] });
    console.log('Blogs after author_slug migration:');
    console.log(blogs.map(b => b.toJSON()));
    process.exit(0);
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  }
}

migrate();

