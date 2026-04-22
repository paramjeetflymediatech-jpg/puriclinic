import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import GFCClient from './GFCClient';

export async function generateMetadata() {
  return getPageSeo('growth-factor-concentrate');
}

export default async function GFCPage() {
  const seoData = await getPageSeo('growth-factor-concentrate');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <GFCClient />
    </>
  );
}
