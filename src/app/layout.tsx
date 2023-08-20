import '~/assets/css/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DefaultLayouts } from '~/layouts/DefaultLayouts';
import { AsteroidContextWrapper } from '~/features/asteroidList/contexts/AsteroidContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App - root',
  description: 'root page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AsteroidContextWrapper>
          <DefaultLayouts>{children}</DefaultLayouts>
        </AsteroidContextWrapper>
      </body>
    </html>
  );
}
