// Global SEO Utility
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
  'fillers': {
    title: 'Dermal Fillers Treatment in Ludhiana | Puri Skin Clinic',
    description: 'Achieve a youthful look with professional dermal fillers in Ludhiana. Expert facial contouring and volume restoration at Puri Skin Clinic.',
    keywords: 'dermal fillers Ludhiana, lip fillers, facial contouring, skin clinic',
  },
  'chemical-peel': {
    title: 'Chemical Peel Treatment in Ludhiana | Skin Rejuvenation',
    description: 'Revitalize your skin with chemical peels in Ludhiana. Treatment for acne marks, fine lines, and uneven skin tone at Puri Skin Clinic.',
    keywords: 'chemical peel Ludhiana, skin peeling, skin rejuvenation, acne marks treatment',
  },
  'hair-transplantation': {
    title: 'Best Hair Transplantation in Ludhiana | Hair Restoration',
    description: 'Get natural-looking hair with the best hair transplantation in Ludhiana. Advanced FUE and hair restoration at Puri Skin Clinic.',
    keywords: 'hair transplant Ludhiana, FUE hair transplant, hair restoration, hair loss treatment',
  },
  'facial-rejuvenation': {
    title: 'Facial Rejuvenation Services in Ludhiana | Puri Skin Clinic',
    description: 'Restore your natural glow with expert facial rejuvenation in Ludhiana. Advanced treatments for youthful skin at Puri Skin Clinic.',
    keywords: 'facial rejuvenation Ludhiana, skin glow, anti-aging treatment',
  },
  'non-surgical-facelift': {
    title: 'Non-Surgical Facelift in Ludhiana | Tighten Skin Naturally',
    description: 'Look younger without surgery. Our non-surgical facelift in Ludhiana uses advanced techniques to tighten and lift your skin.',
    keywords: 'non surgical facelift, skin tightening Ludhiana, thread lift, anti-aging',
  },
  'wart-removal-in-ludhiana': {
    title: 'Safe Wart Removal in Ludhiana | Puri Skin Clinic',
    description: 'Get rid of unwanted warts safely and effectively. Professional wart removal treatment in Ludhiana at Puri Skin Clinic.',
    keywords: 'wart removal Ludhiana, skin tag removal, clinical wart treatment',
  },
  'acne-treatment': {
    title: 'Acne Treatment in Ludhiana | Clear Skin Specialists',
    description: 'Struggling with acne? Get the best acne treatment in Ludhiana. Personalized care for clear, blemish-free skin at Puri Skin Clinic.',
    keywords: 'acne treatment Ludhiana, pimple treatment, acne scar removal',
  },
  'dermaroller': {
    title: 'Dermaroller Treatment in Ludhiana | Microneedling Therapy',
    description: 'Improve skin texture and reduce scars with Dermaroller treatment in Ludhiana. Professional microneedling at Puri Skin Clinic.',
    keywords: 'dermaroller Ludhiana, microneedling, skin resurfacing, acne scar treatment',
  },
  'skin-related-services': {
    title: 'Skin Related Services in Ludhiana | Puri Skin Clinic',
    description: 'Explore our comprehensive range of skin treatments in Ludhiana. From dermatology to aesthetic skin care at Puri Skin Clinic.',
    keywords: 'skin care services, dermatology Ludhiana, skin specialist',
  },
  'vitiligo-treatment': {
    title: 'Vitiligo Treatment in Ludhiana | Pigment Restoration',
    description: 'Expert vitiligo treatment in Ludhiana. Advanced therapies to restore skin pigment and manage vitiligo at Puri Skin Clinic.',
    keywords: 'vitiligo treatment Ludhiana, skin pigment restoration, white patches treatment',
  },
  'hair-related-services': {
    title: 'Hair Related Services in Ludhiana | Trichology Experts',
    description: 'Comprehensive hair care solutions in Ludhiana. From hair loss treatment to advanced hair restoration at Puri Skin Clinic.',
    keywords: 'hair care Ludhiana, trichologist, hair loss solutions',
  },
  'dermapen': {
    title: 'Dermapen Treatment in Ludhiana | Advanced Microneedling',
    description: 'Get smoother skin with Dermapen treatment in Ludhiana. Next-gen microneedling for scars and skin rejuvenation at Puri Skin Clinic.',
    keywords: 'dermapen Ludhiana, microneedling therapy, skin rejuvenation',
  },
  'melasma-treatment': {
    title: 'Melasma Treatment in Ludhiana | Pigmentation Experts',
    description: 'Effective melasma and pigmentation treatment in Ludhiana. Professional care for even skin tone at Puri Skin Clinic.',
    keywords: 'melasma treatment Ludhiana, pigmentation treatment, skin lightning',
  },
  'exosome': {
    title: 'Exosome Therapy in Ludhiana | Advanced Skin Repair',
    description: 'Experience the future of skin repair with Exosome therapy in Ludhiana. Cutting-edge regenerative treatment at Puri Skin Clinic.',
    keywords: 'exosome therapy Ludhiana, skin repair, regenerative medicine',
  },
  'prp-for-hair-and-skin': {
    title: 'PRP Treatment in Ludhiana | Hair & Skin Growth Factors',
    description: 'Boost hair growth and skin radiance with PRP treatment in Ludhiana. Natural growth factor therapy at Puri Skin Clinic.',
    keywords: 'PRP treatment Ludhiana, hair growth PRP, skin rejuvenation PRP',
  },
  'laser-hair-removal': {
    title: 'Best Laser Hair Removal in Ludhiana | Smooth Skin',
    description: 'Get rid of unwanted hair permanently with the best laser hair removal in Ludhiana. Safe and effective at Puri Skin Clinic.',
    keywords: 'laser hair removal Ludhiana, permanent hair reduction, painless hair removal',
  },
  'growth-factor-concentrate': {
    title: 'GFC Treatment in Ludhiana | Growth Factor Concentrate',
    description: 'Advanced GFC treatment in Ludhiana for hair loss and skin rejuvenation. High-concentration growth factor therapy.',
    keywords: 'GFC treatment Ludhiana, growth factor concentrate, hair loss therapy',
  },
  'botox': {
    title: 'Botox Treatment in Ludhiana | Anti-Aging Injections',
    description: 'Smooth out wrinkles and fine lines with Botox treatment in Ludhiana. Professional anti-aging injections at Puri Skin Clinic.',
    keywords: 'botox Ludhiana, anti-wrinkle treatment, facial rejuvenation',
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
      // We'll also return the raw schema if someone wants to render it manually
      schema: row?.schema_json ? JSON.parse(row.schema_json) : null,
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
    if (row && row.schema_json) {
      return JSON.parse(row.schema_json);
    }
  } catch (err) {
    console.error('Error fetching global schema:', err);
  }
  return null;
}

export async function getGlobalScripts() {
  try {
    const row = await SeoSetting.findOne({ where: { page_key: '__global_scripts__' } });
    if (row && row.schema_json) {
      return JSON.parse(row.schema_json);
    }
  } catch (err) {
    console.error('Error fetching global scripts:', err);
  }
  return { gtmId: '', gaId: '', headScripts: '', footerScripts: '' };
}
