import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('botox');
}

export default function Layout({ children }) {
  return children;
}
