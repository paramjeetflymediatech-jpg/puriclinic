import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import HairServicesClient from './HairServicesClient';

export async function generateMetadata() {
  return getPageSeo('hair-related-services');
}

export default async function HairServicesPage() {
  const seoData = await getPageSeo('hair-related-services');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.hair} />
      <HairServicesClient />
    </>
  );
}
