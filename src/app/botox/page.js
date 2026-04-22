import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import FAQSchema from '@/components/Seo/FAQSchema';
import { FAQ_DATA } from '@/constants/constantdata';
import BotoxClient from './BotoxClient';

export async function generateMetadata() {
  return getPageSeo('botox');
}

export default async function BotoxPage() {
  const seoData = await getPageSeo('botox');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <FAQSchema faqs={FAQ_DATA.botox} />
      <BotoxClient />
    </>
  );
}
