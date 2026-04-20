import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('dermaroller');
}

export default function Layout({ children }) {
  return children;
}
