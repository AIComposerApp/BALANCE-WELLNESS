import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const serifFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Balance Wellness Coach - Brand Identity & Design System',
  description:
    'Holistic guidance for mind, body & soul. Comprehensive brand identity guide and design system specification.',
  openGraph: {
    title: 'Balance Wellness Coach - Brand Identity & Design System',
    description:
      'Holistic guidance for mind, body & soul. Comprehensive brand identity guide and design system specification.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balance Wellness Coach - Brand Identity & Design System',
    description:
      'Holistic guidance for mind, body & soul. Comprehensive brand identity guide and design system specification.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="font-sans antialiased text-[#1E2522] bg-[#F9F7F2]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
