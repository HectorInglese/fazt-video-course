import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Providers } from "./providers";
import NavBar from '@/components/NavBar';

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
      <body className={`min-h-screen ${lato.className}`}>
        <Providers>
          <NavBar />
          <div className="h-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};
