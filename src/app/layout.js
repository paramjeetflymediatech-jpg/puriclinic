// Root Layout for Puri Skin Clinic
import './globals.css';
import Script from 'next/script';
import { Nunito_Sans, Cormorant_Garamond, Playfair_Display, Lora } from 'next/font/google';
export const dynamic = 'force-dynamic';
import { getGlobalSchema, getGlobalScripts } from '../lib/seo';
import { HeaderConditional, FooterConditional } from '@/components/ConditionalLayout/ConditionalLayout';

function parseHeadHTML(html) {
  if (!html) return [];
  const tags = [];
  // Match tags like <meta ...>, <link ...>, <script ...>...</script>, <style ...>...</style>
  const tagRegex = /<([a-zA-Z0-9:-]+)([^>]*?)(?:>([\s\S]*?)<\/\1>|\/>|>)/gi;
  const attrRegex = /([a-zA-Z0-9:-]+)(?:=(?:'([^']*)'|"([^"]*)"|([^\s>]+)))?/g;

  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    const tagName = match[1].toUpperCase();
    const attrString = match[2];
    const content = match[3] || '';

    const attributes = {};
    let attrMatch;
    attrRegex.lastIndex = 0;
    while ((attrMatch = attrRegex.exec(attrString)) !== null) {
      const key = attrMatch[1];
      const val = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? '';
      attributes[key] = val;
    }

    tags.push({ tagName, attributes, content });
  }
  return tags;
}

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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  metadataBase: new URL(BASE_URL),
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
    url: BASE_URL,
  },
};

export default async function RootLayout({ children }) {
  const [schema, scripts] = await Promise.all([
    getGlobalSchema(),
    getGlobalScripts()
  ]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Parsed global headScripts rendered directly inside head */}
        {parseHeadHTML(scripts.headScripts).map((tag, idx) => {
          const { tagName, attributes, content } = tag;
          const key = `head-tag-${tagName.toLowerCase()}-${idx}`;

          const reactProps = {};
          Object.entries(attributes).forEach(([k, v]) => {
            if (k === 'class') {
              reactProps.className = v;
            } else if (k === 'for') {
              reactProps.htmlFor = v;
            } else {
              reactProps[k] = v;
            }
          });

          if (tagName === 'META') {
            return <meta key={key} {...reactProps} />;
          }
          if (tagName === 'LINK') {
            return <link key={key} {...reactProps} />;
          }
          if (tagName === 'SCRIPT') {
            if (content) {
              return (
                <script
                  key={key}
                  {...reactProps}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              );
            }
            return <script key={key} {...reactProps} />;
          }
          if (tagName === 'STYLE') {
            return (
              <style
                key={key}
                {...reactProps}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            );
          }
          if (tagName === 'TITLE') {
            return <title key={key}>{content}</title>;
          }
          return null;
        })}

        {/* Google Analytics (GA4) */}
        {scripts.gaId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${scripts.gaId}`}
          />
        )}
        {scripts.gaId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${scripts.gaId}');
              `
            }}
          />
        )}

        {/* Google Tag Manager */}
        {scripts.gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${scripts.gtmId}');
              `
            }}
          />
        )}

        {/* Global JSON-LD Schema */}
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </head>
      <body className={`${nunitoSans.variable} ${lora.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${nunitoSans.className} antialiased`} suppressHydrationWarning>
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