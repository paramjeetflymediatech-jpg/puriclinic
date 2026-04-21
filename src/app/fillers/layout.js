import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('fillers');
}

export default function Layout({ children }) {
  return children;
}
