import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import ChemicalPeelClient from './ChemicalPeelClient';

export async function generateMetadata() {
  return getPageSeo('chemical-peel');
}

export default async function ChemicalPeelPage() {
  const seoData = await getPageSeo('chemical-peel');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <ChemicalPeelClient />
    </>
  );
}
