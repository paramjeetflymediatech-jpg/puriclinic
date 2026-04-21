import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('acne-treatment');
}

export default function Layout({ children }) {
  return children;
}
