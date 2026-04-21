import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('prp-for-hair-and-skin');
}

export default function Layout({ children }) {
  return children;
}
