import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { YMapLoader } from './components/YMapLoader';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'IP-ADDRESS-TRACKER',
  description: 'Frontend mentor challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} min-h-screen bg-dark-gray`}>
        {children}
        <YMapLoader />
      </body>
    </html>
  );
}
