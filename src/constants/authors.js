// Author definitions and Schema.org Author Markup helpers for Puri Skin Clinic
export const DOCTOR_AUTHORS = {
  'dr-gurinderjit-singh': {
    id: 'dr-gurinderjit-singh',
    slug: 'dr-gurinderjit-singh',
    name: 'Dr. Gurinderjit Singh Puri',
    degree: 'MD, Dermatology',
    credentials: 'MBBS, MD (Dermatology)',
    bylineName: 'Dr. Gurinderjit Singh Puri (MD, Dermatology)',
    linkText: 'Dr Gurinderjit Singh Puri - Best Dermatologist in Ludhiana',
    pageUrl: 'https://puriskinclinic.com/dr-gurinderjit-singh/',
    path: '/dr-gurinderjit-singh/',
    image: '/doctors/dr-gurinderjit-singh/de3.avif',
    experience: '40+ Years',
    role: 'Founder & Chief Dermatologist',
    bio: 'Pioneer of Hair Transplantation in North India (1988) and veteran dermatologist with over 40 years of clinical and surgical dermatology excellence.',
    sameAs: ['https://puriskinclinic.com/dr-gurinderjit-singh/']
  },
  'dr-ashwajit-singh': {
    id: 'dr-ashwajit-singh',
    slug: 'dr-ashwajit-singh',
    name: 'Dr. Ashwajit Singh',
    degree: 'MD, Dermatology',
    credentials: 'MBBS, MD (Dermatology)',
    bylineName: 'Dr. Ashwajit Singh (MD, Dermatology)',
    linkText: 'Dr. Ashwajit Singh - Best Skin Doctor in Ludhiana, Punjab',
    pageUrl: 'https://puriskinclinic.com/dr-ashwajit-singh/',
    path: '/dr-ashwajit-singh/',
    image: '/doctors/dr-ashwajit/de4.avif',
    experience: '6+ Years',
    role: 'Skin & Aesthetic Dermatologist',
    bio: 'Specialist in advanced clinical dermatology, aesthetic procedures, vitiligo, melasma, and evidence-based laser and skin treatments.',
    sameAs: ['https://puriskinclinic.com/dr-ashwajit-singh/']
  }
};

export const DEFAULT_AUTHOR_SLUG = 'dr-gurinderjit-singh';

export const AUTHOR_LIST = [
  DOCTOR_AUTHORS['dr-gurinderjit-singh'],
  DOCTOR_AUTHORS['dr-ashwajit-singh']
];

export function getAuthor(slug) {
  if (!slug) return DOCTOR_AUTHORS[DEFAULT_AUTHOR_SLUG];
  // Match by slug or partial match
  if (DOCTOR_AUTHORS[slug]) return DOCTOR_AUTHORS[slug];
  const normalized = String(slug).toLowerCase().trim();
  if (normalized.includes('ashwajit')) return DOCTOR_AUTHORS['dr-ashwajit-singh'];
  if (normalized.includes('gurinderjit') || normalized.includes('puri')) return DOCTOR_AUTHORS['dr-gurinderjit-singh'];
  return DOCTOR_AUTHORS[DEFAULT_AUTHOR_SLUG];
}

/**
 * Generate comprehensive Schema.org JSON-LD structure
 * including Article/BlogPosting with full Person Author schema.
 */
export function generateAuthorSchema(author, blog) {
  const siteUrl = 'https://puriskinclinic.com';
  const blogUrl = `${siteUrl}/blogs/${blog.slug}/`;
  const authorPageUrl = author.pageUrl || `${siteUrl}${author.path}`;
  const authorImageUrl = author.image?.startsWith('http')
    ? author.image
    : `${siteUrl}${author.image}`;
  const blogImageUrl = blog.image_url?.startsWith('http')
    ? blog.image_url
    : (blog.image_url ? `${siteUrl}${blog.image_url}` : `${siteUrl}/dermatology-3.jpg`);

  const publishedDate = blog.createdAt
    ? new Date(blog.createdAt).toISOString()
    : new Date().toISOString();
  const modifiedDate = blog.updatedAt
    ? new Date(blog.updatedAt).toISOString()
    : publishedDate;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${blogUrl}#article`,
        'isPartOf': {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          'name': 'Puri Skin Clinic',
          'url': `${siteUrl}/`
        },
        'headline': blog.title,
        'description': blog.meta_description || blog.excerpt || blog.title,
        'image': [blogImageUrl],
        'datePublished': publishedDate,
        'dateModified': modifiedDate,
        'inLanguage': blog.language === 'hi' ? 'hi-IN' : 'en-US',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': blogUrl
        },
        'author': {
          '@type': 'Person',
          '@id': `${authorPageUrl}#author`,
          'name': author.name,
          'honorificPrefix': 'Dr.',
          'jobTitle': author.degree,
          'description': author.bio,
          'url': authorPageUrl,
          'sameAs': author.sameAs || [authorPageUrl],
          'image': authorImageUrl,
          'worksFor': {
            '@type': 'MedicalClinic',
            '@id': `${siteUrl}/#organization`,
            'name': 'Puri Skin Clinic',
            'url': `${siteUrl}/`
          }
        },
        'publisher': {
          '@type': 'MedicalClinic',
          '@id': `${siteUrl}/#organization`,
          'name': 'Puri Skin Clinic',
          'url': `${siteUrl}/`,
          'logo': {
            '@type': 'ImageObject',
            'url': `${siteUrl}/logo.png`
          }
        }
      },
      {
        '@type': 'Person',
        '@id': `${authorPageUrl}#author`,
        'name': author.name,
        'honorificPrefix': 'Dr.',
        'jobTitle': author.degree,
        'description': author.bio,
        'url': authorPageUrl,
        'sameAs': author.sameAs || [authorPageUrl],
        'image': authorImageUrl,
        'worksFor': {
          '@type': 'MedicalClinic',
          '@id': `${siteUrl}/#organization`,
          'name': 'Puri Skin Clinic',
          'url': `${siteUrl}/`
        }
      }
    ]
  };
}

