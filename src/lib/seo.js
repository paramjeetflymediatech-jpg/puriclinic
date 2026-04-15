// src/lib/seo.js
// Server-side SEO helpers — used in page.js files for generateMetadata
// and in root layout.js for global JSON-LD schema injection.

import { SeoSetting } from './models/index.js';

const SITE_NAME = 'Puri Skin Clinic';
const DEFAULT_OG_IMAGE = '/og-default.jpg';

// Fallback metadata per page (used when DB has no entry yet)
const DEFAULTS = {
  home: {
    title: 'Puri Skin Clinic — Expert Dermatology & Skin Care',
    description: 'Puri Skin Clinic offers advanced dermatology, skin care, and cosmetic treatments with proven results. Book your consultation today.',
    keywords: 'skin clinic, dermatology, skin care, puri clinic',
  },
  'about-us': {
    title: 'About Us — Puri Skin Clinic',
    description: 'Learn about our expert team, our mission, and our commitment to exceptional skin care at Puri Skin Clinic.',
    keywords: 'about puri skin clinic, skin doctor, dermatologist',
  },
  services: {
    title: 'Our Services — Puri Skin Clinic',
    description: 'Explore our wide range of dermatology and cosmetic skin care services including laser, acne treatment, and more.',
    keywords: 'skin services, laser treatment, acne, dermatology services',
  },
  doctors: {
    title: 'Our Doctors — Puri Skin Clinic',
    description: 'Meet our experienced team of certified dermatologists and skin care specialists at Puri Skin Clinic.',
    keywords: 'skin specialists, dermatologists, puri clinic doctors',
  },
  'contact-us': {
    title: 'Contact Us — Puri Skin Clinic',
    description: 'Get in touch with Puri Skin Clinic. Find our location, phone number, and email address.',
    keywords: 'contact puri skin clinic, clinic address, clinic phone',
  },
  'book-appointment': {
    title: 'Book Appointment — Puri Skin Clinic',
    description: 'Schedule your appointment at Puri Skin Clinic online. Easy, fast, and convenient.',
    keywords: 'book appointment skin clinic, online appointment, dermatology appointment',
  },
  blogs: {
    title: 'Blogs & Articles — Puri Skin Clinic',
    description: 'Read expert articles on skin care, dermatology tips, and treatment guides from Puri Skin Clinic.',
    keywords: 'skin care blog, dermatology articles, skin tips',
  },
  'success-stories': {
    title: 'Patient Success Stories — Puri Skin Clinic',
    description: 'Read real patient success stories and transformation results from Puri Skin Clinic.',
    keywords: 'patient stories, skin treatment results, testimonials',
  },
};

/**
 * Fetch per-page SEO metadata from DB.
 * @param {string} pageKey - e.g. 'home', 'about-us'
 * @returns {import('next').Metadata}
 */
export async function getPageSeo(pageKey) {
  try {
    const row = await SeoSetting.findOne({ where: { page_key: pageKey } });
    const defaults = DEFAULTS[pageKey] || { title: SITE_NAME, description: '', keywords: '' };

    const title = row?.title || defaults.title;
    const description = row?.description || defaults.description;
    const keywords = row?.keywords || defaults.keywords;
    const ogTitle = row?.og_title || title;
    const ogDescription = row?.og_description || description;
    const ogImage = row?.og_image || DEFAULT_OG_IMAGE;

    return {
      title,
      description,
      keywords,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        images: [{ url: ogImage }],
        siteName: SITE_NAME,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: ogTitle,
        description: ogDescription,
        images: [ogImage],
      },
    };
  } catch {
    const defaults = DEFAULTS[pageKey] || { title: SITE_NAME, description: '' };
    return { title: defaults.title, description: defaults.description };
  }
}

/**
 * Fetch global JSON-LD schema from DB.
 * Returns null if not configured yet.
 * @returns {object|null}
 */
export async function getGlobalSchema() {
  try {
    const row = await SeoSetting.findOne({ where: { page_key: '__schema__' } });
    if (!row || !row.schema_json) return null;
    return JSON.parse(row.schema_json);
  } catch {
    return null;
  }
}
