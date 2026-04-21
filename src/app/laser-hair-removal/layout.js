import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('laser-hair-removal');
}

export default function Layout({ children }) {
  return children;
}
