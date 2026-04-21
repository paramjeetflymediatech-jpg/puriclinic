import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('dermapen');
}

export default function Layout({ children }) {
  return children;
}
