import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import FaceliftClient from './FaceliftClient';

export async function generateMetadata() {
  return getPageSeo('non-surgical-facelift');
}

export default async function FaceliftPage() {
  const seoData = await getPageSeo('non-surgical-facelift');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.nonSurgicalFacelift} />
      <FaceliftClient />
    </>
  );
}
