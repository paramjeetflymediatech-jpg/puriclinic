import { getPageSeo } from '@/lib/seo';

export async function generateMetadata() {
  return getPageSeo('doctors');
}

export default function DoctorsLayout({ children }) {
  return children;
}
