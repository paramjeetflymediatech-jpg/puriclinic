import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import MelasmaClient from './MelasmaClient';

export async function generateMetadata() {
  return getPageSeo('melasma-treatment');
}

export default async function MelasmaPage() {
  const seoData = await getPageSeo('melasma-treatment');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.melasma} />
      <MelasmaClient />
    </>
  );
}
