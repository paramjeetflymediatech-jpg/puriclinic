import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('non-surgical-facelift');
}

export default function Layout({ children }) {
  return children;
}
