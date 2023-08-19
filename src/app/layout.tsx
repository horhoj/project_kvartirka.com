import '~/assets/css/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DefaultLayouts } from '~/layouts/DefaultLayouts';

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
        <DefaultLayouts>{children}</DefaultLayouts>
      </body>
    </html>
  );
}
