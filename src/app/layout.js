// Root Layout for Puri Skin Clinic
import './globals.css';
import Script from 'next/script';
import { Nunito_Sans, Cormorant_Garamond, Playfair_Display, Lora } from 'next/font/google';
import { getGlobalSchema, getGlobalScripts } from '../lib/seo';
import { HeaderConditional, FooterConditional } from '@/components/ConditionalLayout/ConditionalLayout';

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
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    siteName: 'Puri Skin Clinic',
    type: 'website',
    url: 'https://puriskinclinic.com',
  },
};

export default async function RootLayout({ children }) {
  const [schema, scripts] = await Promise.all([
    getGlobalSchema(),
    getGlobalScripts()
  ]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* humne yahan font-class apply ki hai taaki poori site par branding match ho */}
      <body className={`${nunitoSans.variable} ${lora.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${nunitoSans.className} antialiased`} suppressHydrationWarning>
        {/* Google Analytics (GA4) */}
        {scripts.gaId && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${scripts.gaId}`}
            strategy="afterInteractive"
          />
        )}
        {scripts.gaId && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${scripts.gaId}');
            `}
          </Script>
        )}

        {/* Google Tag Manager */}
        {scripts.gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${scripts.gtmId}');
            `}
          </Script>
        )}

        {/* GTM Noscript */}
        {scripts.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${scripts.gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}

        {/* Custom Head/Global Scripts (Injected at start of body for compatibility) */}
        {scripts.headScripts && (
          <div dangerouslySetInnerHTML={{ __html: scripts.headScripts }} />
        )}

        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        <HeaderConditional />
        <main>{children}</main>
        <FooterConditional />

        {/* Custom Footer Scripts */}
        {scripts.footerScripts && (
          <div dangerouslySetInnerHTML={{ __html: scripts.footerScripts }} />
        )}
      </body>
    </html>
  );
}