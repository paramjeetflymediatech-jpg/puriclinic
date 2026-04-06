import './globals.css';
import { Nunito_Sans, Cormorant_Garamond, Playfair_Display, Lora } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header/Header';

// Puri Skin Clinic uses Nunito Sans with heavy weights for that bold look
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  // 800 and 900 weights are critical for the Top Bar and Nav bold text
  weight: ['300', '400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

// Lora — used for "Premium Option" dynamic text
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-lora',
});

// Cormorant Garamond — used for section headings (e.g. "Access our Exclusive Services!")
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

// Playfair Display — the actual font used for section headings (confirmed via DevTools: 46px)
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

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
      {/* humne yahan font-class apply ki hai taaki poori site par branding match ho */}
      <body className={`${nunitoSans.variable} ${lora.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${nunitoSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}