import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('exosome');
}

export default function Layout({ children }) {
  return children;
}
