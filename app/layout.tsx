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
  icons: {
    icon: './assets/favicon.ico',
  }
};;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`h-screen ${lato.className} scrollbar-hide`}>
        <Providers>
          <NavBar />
          <div className="h-screen pt-20 px-2 ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};
