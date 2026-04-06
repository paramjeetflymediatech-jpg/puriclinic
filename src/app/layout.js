import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: {
    default: 'Best Skin Clinic in Ludhiana | Dermatologist in Punjab - Puri Skin Clinic',
    template: '%s | Puri Skin Clinic',
  },
  description:
    'Find the best skin clinic in Ludhiana at Puri Skin Clinic where our lead dermatologist Dr. Gurinderjit Singh has over 40 years of experience and offers the best skin treatments.',
  keywords: ['skin clinic Ludhiana', 'dermatologist Punjab', 'hair transplant Ludhiana', 'acne treatment', 'vitiligo treatment'],
  openGraph: {
    siteName: 'Puri Skin Clinic',
    type: 'website',
    url: 'https://puriskinclinic.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
