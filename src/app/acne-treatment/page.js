import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import AcneTreatmentClient from './AcneTreatmentClient';

export async function generateMetadata() {
  return getPageSeo('acne-treatment');
}

export default async function AcneTreatmentPage() {
  const seoData = await getPageSeo('acne-treatment');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <AcneTreatmentClient />
    </>
  );
}
