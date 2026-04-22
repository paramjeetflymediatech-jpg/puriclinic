import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import DermarollerClient from './DermarollerClient';

export async function generateMetadata() {
  return getPageSeo('dermaroller');
}

export default async function DermarollerPage() {
  const seoData = await getPageSeo('dermaroller');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.dermaroller} />
      <DermarollerClient />
    </>
  );
}
