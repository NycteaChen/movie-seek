import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/global.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollTop from '@/components/layout/ScrollTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Movie Seek',
  description: 'Search for the movies you are interested in!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Header isFixed={true} />
        <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
