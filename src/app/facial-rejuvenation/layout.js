import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('facial-rejuvenation');
}

export default function Layout({ children }) {
  return children;
}
