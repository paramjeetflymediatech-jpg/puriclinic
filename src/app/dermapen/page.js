import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import DermapenClient from './DermapenClient';

export async function generateMetadata() {
  return getPageSeo('dermapen');
}

export default async function DermapenPage() {
  const seoData = await getPageSeo('dermapen');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.dermapen} />
      <DermapenClient />
    </>
  );
}
