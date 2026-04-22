import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import SkinServicesClient from './SkinServicesClient';

export async function generateMetadata() {
  return getPageSeo('skin-related-services');
}

export default async function SkinServicesPage() {
  const seoData = await getPageSeo('skin-related-services');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.skinServices} />
      <SkinServicesClient />
    </>
  );
}
