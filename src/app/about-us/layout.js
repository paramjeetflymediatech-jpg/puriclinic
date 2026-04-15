import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('about-us');
}

export default function AboutUsLayout({ children }) {
  return children;
}
