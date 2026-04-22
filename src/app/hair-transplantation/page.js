import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import HairTransplantClient from './HairTransplantClient';

export async function generateMetadata() {
  return getPageSeo('hair-transplantation');
}

export default async function HairTransplantPage() {
  const seoData = await getPageSeo('hair-transplantation');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.hair} />
      <HairTransplantClient />
    </>
  );
}
