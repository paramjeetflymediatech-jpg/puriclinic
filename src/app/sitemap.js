import { Blog } from '@/lib/models';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // 1. Static Pages
  const staticPages = [
    '',
    '/about-us',
    '/services',
    '/blogs',
    '/success-stories',
    '/contact-us',
    '/book-appointment',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Fetch all Blogs
  let blogEntries = [];
  try {
    const blogs = await Blog.findAll({ where: { is_published: true } });
    blogEntries = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: blog.updatedAt || new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (e) {
    console.error('Sitemap Blog Fetch Error:', e);
  }

  // 3. Fetch all Dynamic Doctors
  let doctorEntries = [];
  try {
    const { Doctor } = await import('@/lib/models');
    const doctors = await Doctor.findAll();
    doctorEntries = doctors.map((doc) => ({
      url: `${baseUrl}/doctors/${doc.slug}`,
      lastModified: doc.updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (e) {
    console.error('Sitemap Doctor Fetch Error:', e);
  }

  // 4. Hardcoded Clinical Service Pages (as seen in your file structure)
  const servicePages = [
    '/acne-treatment',
    '/botox',
    '/chemical-peel',
    '/dermapen',
    '/dermaroller',
    '/exosome',
    '/facial-rejuvenation',
    '/fillers',
    '/growth-factor-concentrate',
    '/hair-related-services',
    '/hair-transplantation',
    '/laser-hair-removal',
    '/melasma-treatment',
    '/non-surgical-facelift',
    '/prp-for-hair-and-skin',
    '/skin-related-services',
    '/vitiligo-treatment',
    '/wart-removal-in-ludhiana',
    "/dr-gurinderjit-singh",
    "/dr-ashwajit-singh"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...blogEntries, ...doctorEntries];
}
