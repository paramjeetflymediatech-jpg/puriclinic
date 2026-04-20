import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('hair-related-services');
}

export default function Layout({ children }) {
  return children;
}
