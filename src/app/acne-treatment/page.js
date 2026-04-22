import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import AcneTreatmentClient from './AcneTreatmentClient';

export async function generateMetadata() {
  return getPageSeo('acne-treatment');
}

export default async function AcneTreatmentPage() {
  const seoData = await getPageSeo('acne-treatment');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.acne} />
      <AcneTreatmentClient />
    </>
  );
}
