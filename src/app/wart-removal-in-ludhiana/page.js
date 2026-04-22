import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import WartRemovalClient from './WartRemovalClient';

export async function generateMetadata() {
  return getPageSeo('wart-removal-in-ludhiana');
}

export default async function WartRemovalPage() {
  const seoData = await getPageSeo('wart-removal-in-ludhiana');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <WartRemovalClient />
    </>
  );
}
