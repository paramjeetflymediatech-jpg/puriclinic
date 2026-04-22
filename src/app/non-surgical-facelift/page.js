import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FaceliftClient from './FaceliftClient';

export async function generateMetadata() {
  return getPageSeo('non-surgical-facelift');
}

export default async function FaceliftPage() {
  const seoData = await getPageSeo('non-surgical-facelift');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FaceliftClient />
    </>
  );
}
