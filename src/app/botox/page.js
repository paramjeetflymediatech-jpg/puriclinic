import React from 'react';
import { getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import BotoxClient from './BotoxClient';

export async function generateMetadata() {
  return getPageSeo('botox');
}

export default async function BotoxPage() {
  const seoData = await getPageSeo('botox');

  return (
    <>
      <JsonLd schema={seoData.schema} />
      <BotoxClient />
    </>
  );
}
