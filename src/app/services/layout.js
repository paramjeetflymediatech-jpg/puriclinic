import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('services');
}

export default function ServicesLayout({ children }) {
  return children;
}
