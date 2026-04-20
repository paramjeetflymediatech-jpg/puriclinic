import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('melasma-treatment');
}

export default function Layout({ children }) {
  return children;
}
