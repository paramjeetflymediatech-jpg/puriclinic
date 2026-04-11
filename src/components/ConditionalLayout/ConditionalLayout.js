'use client';
import { usePathname } from 'next/navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton';

export function HeaderConditional() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  return <Header />;
}

export function FooterConditional() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  return (
    <>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
