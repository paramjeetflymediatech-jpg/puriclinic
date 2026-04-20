import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('skin-related-services');
}

export default function Layout({ children }) {
  return children;
}
