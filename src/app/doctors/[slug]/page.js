import React from 'react';
import { notFound } from 'next/navigation';
import { Doctor } from '@/lib/models';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import DoctorBioClient from './DoctorBioClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const doctor = await Doctor.findOne({ where: { slug } });

  if (!doctor) {
    return { title: 'Doctor Not Found' };
  }

  // Fetch custom SEO if exists (e.g. key 'doctor:dr-name')
  const customSeo = await getPageSeo(`doctor:${slug}`);

  const title = customSeo.title !== 'Puri Skin Clinic' ? customSeo.title : `${doctor.name} | Best Dermatologist in Ludhiana`;
  const description = customSeo.description || `Meet ${doctor.name}, ${doctor.designation} at Puri Skin Clinic. ${doctor.degree} with ${doctor.experience} experience.`;

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

export default async function DoctorBioPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const [doctorRaw, customSeo] = await Promise.all([
    Doctor.findOne({ where: { slug } }),
    getPageSeo(`doctor:${slug}`)
  ]);

  if (!doctorRaw) {
    notFound();
  }

  const doctor = doctorRaw.get({ plain: true });

  return (
    <>
      <JsonLd schema={customSeo.schema} />
      <DoctorBioClient doctor={doctor} />
    </>
  );
}
