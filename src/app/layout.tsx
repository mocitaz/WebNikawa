import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PT Nikawa Teknika Indonesia - Distribusi & Solusi Manufaktur Industri',
  description: 'PT Nikawa Teknika Indonesia adalah perusahaan distribusi resin plastik, produk injection molding, GSM modem, komponen elektronik, PCBA, dan berbagai solusi manufaktur sejak 2014.',
  keywords: 'resin plastik, injection molding, GSM modem, komponen elektronik, PCBA, manufaktur, industri, Hitachi, Acumen Engineering, Itron',
  authors: [{ name: 'PT Nikawa Teknika Indonesia' }],
  openGraph: {
    title: 'PT Nikawa Teknika Indonesia - Distribusi & Solusi Manufaktur Industri',
    description: 'Distribusi & Solusi Manufaktur Elektronik, Plastik, dan Komponen Industri sejak 2014',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <LanguageProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

