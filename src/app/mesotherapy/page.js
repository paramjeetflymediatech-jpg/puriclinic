import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import MesotherapyClient from './MesotherapyClient';

export async function generateMetadata() {
  return getPageSeo('mesotherapy');
}

export default async function MesotherapyPage() {
  const seoData = await getPageSeo('mesotherapy');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.mesotherapy} />
      <MesotherapyClient />
    </>
  );
}
