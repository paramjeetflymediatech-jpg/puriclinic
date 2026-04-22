import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import DermapenClient from './DermapenClient';

export async function generateMetadata() {
  return getPageSeo('dermapen');
}

export default async function DermapenPage() {
  const seoData = await getPageSeo('dermapen');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <DermapenClient />
    </>
  );
}
