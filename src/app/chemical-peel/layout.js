import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('chemical-peel');
}

export default function Layout({ children }) {
  return children;
}
