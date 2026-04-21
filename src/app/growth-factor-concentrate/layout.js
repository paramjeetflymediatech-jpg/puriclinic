import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('growth-factor-concentrate');
}

export default function Layout({ children }) {
  return children;
}
