import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import ChemicalPeelClient from './ChemicalPeelClient';

export async function generateMetadata() {
  return getPageSeo('chemical-peel');
}

export default async function ChemicalPeelPage() {
  const seoData = await getPageSeo('chemical-peel');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.chemicalPeel} />
      <ChemicalPeelClient />
    </>
  );
}
