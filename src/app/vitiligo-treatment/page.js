import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import VitiligoClient from './VitiligoClient';

export async function generateMetadata() {
  return getPageSeo('vitiligo-treatment');
}

export default async function VitiligoPage() {
  const seoData = await getPageSeo('vitiligo-treatment');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <VitiligoClient />
    </>
  );
}
