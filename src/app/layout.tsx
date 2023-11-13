import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'IP-ADDRESS-TRACKER',
  description: 'Frontend mentor challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-dark-gray`}>{children}</body>
    </html>
  );
}
