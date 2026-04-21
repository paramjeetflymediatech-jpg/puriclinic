import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('hair-transplantation');
}

export default function Layout({ children }) {
  return children;
}
