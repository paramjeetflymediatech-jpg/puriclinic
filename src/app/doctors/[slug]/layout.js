import { Doctor } from '@/lib/models';
import { getPageSeo } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const doctor = await Doctor.findOne({ where: { slug } });

  if (!doctor) {
    return { title: 'Doctor Not Found | Puri Skin Clinic' };
  }

  // Check for custom SEO settings in DB
  const customSeo = await getPageSeo(`doctor:${slug}`);

  // If custom title or description exists (meaning they were saved in admin), use them.
  // Otherwise, fallback to the generated default.
  const title = customSeo.title !== 'Puri Skin Clinic' ? customSeo.title : `${doctor.name} | Best Skin Specialist in Ludhiana`;
  const description = customSeo.description || `${doctor.name} is a ${doctor.designation} at Puri Skin Clinic with extensive experience in dermatology and aesthetic treatments.`;

  return {
    ...customSeo,
    title,
    description,
    openGraph: {
      ...customSeo.openGraph,
      title: customSeo.openGraph?.title || title,
      description: customSeo.openGraph?.description || description,
      images: customSeo.openGraph?.images || (doctor.image_url ? [{ url: doctor.image_url }] : []),
    },
  };
}

export default function Layout({ children }) {
  return children;
}
