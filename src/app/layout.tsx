import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

