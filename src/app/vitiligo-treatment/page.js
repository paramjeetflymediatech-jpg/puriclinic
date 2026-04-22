import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import VitiligoClient from './VitiligoClient';

export async function generateMetadata() {
  return getPageSeo('vitiligo-treatment');
}

export default async function VitiligoPage() {
  const seoData = await getPageSeo('vitiligo-treatment');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.vitiligo} />
      <VitiligoClient />
    </>
  );
}
