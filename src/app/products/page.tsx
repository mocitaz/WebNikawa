import SectionWrapper from '@/components/ui/SectionWrapper'
import ProductCard from '@/components/ui/ProductCard'
import PartnerGrid from '@/components/ui/PartnerGrid'
import { siteConfig } from '@/content/site'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-white pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-neutral-50 rounded-2xl md:rounded-3xl border border-neutral-100 p-5 md:p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-6 md:gap-8 items-center">
              <div className="space-y-3 md:space-y-4 max-w-3xl">
                <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold">
                  Produk & Layanan Utama
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 leading-tight">
                  Solusi lengkap untuk kebutuhan manufaktur dan teknologi industri Anda
                </h1>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  Portofolio produk NTI mencakup elektronik, manufaktur, dan infrastruktur untuk memastikan kesinambungan operasi industri Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 justify-end lg:items-end">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-3xl md:text-4xl font-semibold text-primary">
                      {siteConfig.products.length.toString().padStart(2, '0')}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
                      Produk
                    </p>
                  </div>
                  <div className="h-10 w-px bg-neutral-300 hidden lg:block" />
                  <div>
                    <p className="text-3xl md:text-4xl font-semibold text-primary">04</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
                      Kategori
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-4 md:p-5 text-center border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1.5">
                {siteConfig.products.length.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-semibold text-neutral-800 mb-1 uppercase tracking-wide">
                Produk & Layanan
              </div>
              <div className="text-xs text-neutral-500 leading-relaxed">
                Solusi lengkap untuk berbagai kebutuhan industri
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-4 md:p-5 text-center border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1.5">04</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-800 mb-1 uppercase tracking-wide">
                Kategori Utama
              </div>
              <div className="text-xs text-neutral-500 leading-relaxed">
                Dari elektronik hingga infrastruktur
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-4 md:p-5 text-center border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1.5">10+</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-800 mb-1 uppercase tracking-wide">
                Tahun Pengalaman
              </div>
              <div className="text-xs text-neutral-500 leading-relaxed">
                Terpercaya sejak 2014 di industri
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Grid */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 md:mb-8 lg:mb-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-2 md:mb-3 text-center font-semibold">
              Portofolio Produk & Layanan
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-900 mb-3 md:mb-4 text-center leading-tight max-w-3xl mx-auto">
              Produk berkualitas tinggi untuk mendukung kebutuhan industri Anda
            </h2>
            <p className="text-neutral-600 text-sm md:text-base text-center max-w-2xl mx-auto leading-relaxed px-4">
              Setiap produk dirancang dengan presisi dan inovasi untuk memberikan solusi terbaik bagi klien kami.
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {siteConfig.products.map((product) => (
            <div key={product.id} id={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            </div>
          ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <PartnerGrid />

      {/* CTA Section */}
      <SectionWrapper className="relative overflow-hidden py-12 md:py-16">
        {/* Modern gradient background with animated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,113,156,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(128,130,133,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-0.5 h-8 bg-white/90 rounded-full" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
                      Siap Bekerja Sama dengan NTI?
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Hubungi kami hari ini untuk konsultasi dan solusi terbaik
                  </h2>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
                    Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan industri Anda
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl hover:shadow-white/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                        Hubungi Kami
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white hover:text-primary hover:border-white hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Chat WhatsApp
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6 pt-6 border-t border-white/20 text-xs md:text-sm">

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <span className="text-white/30">•</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-white py-10 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-3 font-semibold">
              Pertanyaan yang Sering Diajukan
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-2 leading-tight">
              Informasi penting tentang NTI
            </h2>
          </div>

          <div className="space-y-2">
            {/* FAQ 1 */}
            <details className="group bg-neutral-50 rounded-lg border border-neutral-200/80 overflow-hidden transition-all duration-200 hover:border-primary/40">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  Nikawa itu perusahaan apa?
                </span>
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-3 md:px-4 pb-3 md:pb-4 text-sm text-neutral-600 leading-relaxed">
                PT Nikawa Teknika Indonesia adalah distributor resmi komponen elektronik dan produk plastik industri yang berdiri sejak 13 Agustus 2014, berlokasi di Kawasan Industri Jababeka II, Cikarang, Bekasi.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-neutral-50 rounded-lg border border-neutral-200/80 overflow-hidden transition-all duration-200 hover:border-primary/40">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  Apa saja produk utama Nikawa?
                </span>
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-3 md:px-4 pb-3 md:pb-4 text-sm text-neutral-600 leading-relaxed">
                <p className="mb-2">Kami menyediakan 8 lini produk:</p>
                <ul className="space-y-1.5 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Komponen Elektronik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Perakitan PCBA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>GSM/4G Modem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>LED Road Studs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Resin Plastik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Produk Injeksi Plastik Custom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Smart Meter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Fiber Optic Gas Meter</span>
                  </li>
                </ul>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-neutral-50 rounded-lg border border-neutral-200/80 overflow-hidden transition-all duration-200 hover:border-primary/40">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  Apakah Nikawa melayani perakitan PCBA?
                </span>
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-3 md:px-4 pb-3 md:pb-4 text-sm text-neutral-600 leading-relaxed">
                Ya. Kami memiliki partner EMS di Jababeka dengan 4 line SMT high-speed, standar IPC-A-610 Class 2 (bisa Class 3 untuk proyek medis/automotive safety).
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-neutral-50 rounded-lg border border-neutral-200/80 overflow-hidden transition-all duration-200 hover:border-primary/40">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  Apakah barang ready stock?
                </span>
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-3 md:px-4 pb-3 md:pb-4 text-sm text-neutral-600 leading-relaxed">
                Hampir semua komponen elektronik dan resin plastik ready stock di gudang Jababeka. PCBA prototype 3–7 hari, produksi massal 3–5 minggu.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-neutral-50 rounded-lg border border-neutral-200/80 overflow-hidden transition-all duration-200 hover:border-primary/40">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  Bagaimana cara menghubungi atau minta penawaran?
                </span>
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-3 md:px-4 pb-3 md:pb-4 text-sm text-neutral-600 leading-relaxed">
                <div className="space-y-1.5">
                  <p>
                    <strong className="text-neutral-900">Email:</strong>{' '}
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-neutral-900">Telepon/WhatsApp:</strong>{' '}
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">
                    Kami balas maksimal 1×24 jam (hari kerja).
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

