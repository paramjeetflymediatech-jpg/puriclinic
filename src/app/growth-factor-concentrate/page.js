import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import GFCClient from './GFCClient';

export async function generateMetadata() {
  return getPageSeo('growth-factor-concentrate');
}

export default async function GFCPage() {
  const seoData = await getPageSeo('growth-factor-concentrate');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.gfc} />
      <GFCClient />
    </>
  );
}
