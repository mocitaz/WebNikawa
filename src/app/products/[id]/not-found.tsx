import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function ProductNotFound() {
  return (
    <SectionWrapper className="bg-white pt-24 md:pt-28 pb-10 md:pb-12 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-neutral-50 rounded-3xl border border-neutral-100 p-8 md:p-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Produk Tidak Ditemukan
            </h1>
            <p className="text-neutral-600 text-base md:text-lg">
              Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="btn-primary inline-flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Produk
            </Link>
            <Link href="/" className="btn-secondary inline-flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Beranda
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

