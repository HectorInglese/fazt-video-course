import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Providers } from "./providers";

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Fazt Course Video',
  description: 'App created with Next.js',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={lato.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};
