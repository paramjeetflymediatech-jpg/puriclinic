import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('wart-removal-in-ludhiana');
}

export default function Layout({ children }) {
  return children;
}
