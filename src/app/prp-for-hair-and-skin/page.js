import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import PRPClient from './PRPClient';

export async function generateMetadata() {
  return getPageSeo('prp-for-hair-and-skin');
}

export default async function PRPPage() {
  const seoData = await getPageSeo('prp-for-hair-and-skin');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <PRPClient />
    </>
  );
}
