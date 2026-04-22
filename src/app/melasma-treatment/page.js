import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import MelasmaClient from './MelasmaClient';

export async function generateMetadata() {
  return getPageSeo('melasma-treatment');
}

export default async function MelasmaPage() {
  const seoData = await getPageSeo('melasma-treatment');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <MelasmaClient />
    </>
  );
}
