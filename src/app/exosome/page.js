import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import ExosomeClient from './ExosomeClient';

export async function generateMetadata() {
  return getPageSeo('exosome');
}

export default async function ExosomePage() {
  const seoData = await getPageSeo('exosome');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <ExosomeClient />
    </>
  );
}
