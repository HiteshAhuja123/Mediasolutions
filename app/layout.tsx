import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Media Solutions — Complete Marketing Solutions | Thane, Maharashtra',
    template: '%s | Media Solutions',
  },
  description:
    'Media Solutions is a premium advertising and marketing communications company in Thane, Maharashtra. Experts in OOH advertising, DOOH, digital marketing, event management, cinema advertising and brand technology solutions since 2012.',
  keywords: [
    'advertising agency Thane',
    'outdoor advertising Maharashtra',
    'OOH advertising India',
    'DOOH advertising',
    'digital marketing Thane',
    'event management Maharashtra',
    'cinema advertising India',
    'brand technology solutions',
    'integrated marketing communications',
    'Media Solutions',
  ],
  authors: [{ name: 'Media Solutions' }],
  creator: 'Media Solutions',
  publisher: 'Media Solutions',
  metadataBase: new URL('https://mediasolutions.com'), // ⚠️ Update with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mediasolutions.com', // ⚠️ Update with actual domain
    siteName: 'Media Solutions',
    title: 'Media Solutions — Complete Marketing Solutions',
    description:
      'An integrated advertising and marketing communications company based in Thane, Maharashtra. Connecting brands with audiences since 2012.',
    images: [
      {
        url: '/og-image.jpg', // ⚠️ Create and add this image before launch
        width: 1200,
        height: 630,
        alt: 'Media Solutions — Complete Marketing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Solutions — Complete Marketing Solutions',
    description:
      'Integrated advertising and marketing communications company in Thane, Maharashtra.',
    images: ['/og-image.jpg'], // ⚠️ Create and add this image before launch
    // site: '@mediasolutions', // ⚠️ Add when Twitter account is live
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mediasolutions.com', // ⚠️ Confirm domain before launch
  },
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png', // ⚠️ Add when brand assets are ready
  },
  verification: {
    // google: 'your-google-verification-code', // ⚠️ Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

