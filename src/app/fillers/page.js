import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FillersClient from './FillersClient';

export async function generateMetadata() {
  return getPageSeo('fillers');
}

export default async function FillersPage() {
  const seoData = await getPageSeo('fillers');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FillersClient />
    </>
  );
}
