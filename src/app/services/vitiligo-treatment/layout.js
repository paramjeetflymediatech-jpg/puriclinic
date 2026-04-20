import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('vitiligo-treatment');
}

export default function Layout({ children }) {
  return children;
}
