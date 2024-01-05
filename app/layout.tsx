import type { Metadata } from 'next';
import { Oxygen } from 'next/font/google';
import './globals.css';

const oxyxen = Oxygen({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
  title: 'Next Food',
  description: 'Web site for sharing recipes'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oxyxen.className}>{children}</body>
    </html>
  );
}
