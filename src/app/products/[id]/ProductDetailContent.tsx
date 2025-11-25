'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PartnerGrid from '@/components/ui/PartnerGrid'
import { useLanguage } from '@/contexts/LanguageContext'
import { siteConfig } from '@/content/site'

interface ProductDetailContentProps {
  productId: string
}

export default function ProductDetailContent({ productId }: ProductDetailContentProps) {
  const { t } = useLanguage()
  const product = siteConfig.products.find((p) => p.id === productId)

  if (!product || !product.detail) {
    return null
  }

  const { detail } = product

  // Get translated product name and category
  const translatedProduct = t?.products?.items?.find((p: any) => p.id === productId)
  const productName = translatedProduct?.name || product.name
  const translatedCategory = t?.products?.categories?.[product.category as keyof typeof t.products.categories] || product.category

  // Get translated product details if available
  const translatedDetails = t?.productDetails?.[productId as keyof typeof t.productDetails] as any
  const overview = translatedDetails?.overview || detail.overview
  const features = translatedDetails?.features || detail.features
  const specifications = translatedDetails?.specifications || detail.specifications
  const applications = translatedDetails?.applications || detail.applications
  const benefits = translatedDetails?.benefits || detail.benefits

  // Helper function to replace {productName} in strings
  const replaceProductName = (str: string) => str.replace(/{productName}/g, productName)

  return (
    <>
      {/* Hero Section - Compact & Modern */}
      <SectionWrapper className="bg-gradient-to-br from-neutral-50 via-white to-neutral-50 pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-3 md:mb-4">
            <div className="flex items-center gap-1.5 md:gap-2 text-xs text-neutral-500 overflow-x-auto">
              <Link href="/" className="hover:text-primary transition-colors whitespace-nowrap">
                {t?.productDetailPage?.breadcrumb?.home || 'Beranda'}
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary transition-colors whitespace-nowrap">
                {t?.productDetailPage?.breadcrumb?.products || 'Produk'}
              </Link>
              <span>/</span>
              <span className="text-neutral-900 font-medium truncate">{productName}</span>
            </div>
          </nav>

          {/* Product Header - Compact Design */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-0">
              {/* Image - Full Height */}
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-neutral-100 to-neutral-200">
                <Image
                  src={product.image}
                  alt={productName}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent lg:hidden" />
                {/* Category Badge on Image */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 lg:hidden">
                  <span className="inline-flex items-center px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-bold text-white bg-white/20 backdrop-blur-md border border-white/30">
                    {translatedCategory}
                  </span>
                </div>
              </div>

              {/* Info - Compact */}
              <div className="p-5 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                <div className="mb-3 md:mb-4 hidden lg:block">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20">
                    {translatedCategory}
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-900 leading-tight mb-2 md:mb-3">
                  {productName}
                </h1>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  {translatedProduct?.description || product.description}
                </p>

                {/* Quick Stats - Compact */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                    <div className="text-lg md:text-xl font-bold text-primary mb-0.5">
                      {detail.features.length}
                    </div>
                    <div className="text-xs text-neutral-600">{t?.productDetailPage?.stats?.features || 'Fitur'}</div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                    <div className="text-lg md:text-xl font-bold text-primary mb-0.5">
                      {detail.applications.length}
                    </div>
                    <div className="text-xs text-neutral-600">{t?.productDetailPage?.stats?.applications || 'Aplikasi'}</div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                    <div className="text-lg md:text-xl font-bold text-primary mb-0.5">
                      {detail.benefits.length}
                    </div>
                    <div className="text-xs text-neutral-600">{t?.productDetailPage?.stats?.benefits || 'Keunggulan'}</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-2.5">
                  <Link
                    href={`/contact?product=${encodeURIComponent(productName)}`}
                    className="btn-primary inline-flex items-center justify-center text-center text-sm py-2.5"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {t?.productDetailPage?.actions?.consult || 'Konsultasi'}
                  </Link>
                  <Link
                    href="/products"
                    className="btn-secondary inline-flex items-center justify-center text-center text-sm py-2.5"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t?.productDetailPage?.actions?.back || 'Kembali'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Overview - Compact Card */}
      <SectionWrapper className="bg-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl border border-primary/10 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">{t?.productDetailPage?.overview?.title || 'Overview'}</h2>
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                  {overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Features & Specifications - Compact Grid */}
      <SectionWrapper className="bg-neutral-50 py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Features - Compact Card */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-neutral-900">{t?.productDetailPage?.sections?.features || 'Fitur Utama'}</h2>
              </div>
              <div className="space-y-2.5">
                {features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-2.5 group">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-neutral-700 text-sm leading-relaxed flex-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications - Compact Card */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-neutral-900">{t?.productDetailPage?.sections?.specifications || 'Spesifikasi'}</h2>
              </div>
              <div className="space-y-2.5">
                {specifications.map((spec: { label: string; value: string }, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1.5 pb-2.5 border-b border-neutral-100 last:border-0 last:pb-0">
                    <dt className="text-xs font-bold text-neutral-700 min-w-[120px] uppercase tracking-wide">{spec.label}</dt>
                    <dd className="text-sm text-neutral-600 flex-1">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Applications & Benefits - Compact Grid */}
      <SectionWrapper className="bg-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Applications - Compact Card */}
            <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl border border-primary/10 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-neutral-900">{t?.productDetailPage?.sections?.applications || 'Aplikasi'}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {applications.map((app: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 group">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                    <span className="text-neutral-700 text-sm leading-relaxed">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits - Compact Card */}
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-100 p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-neutral-900">{t?.productDetailPage?.sections?.benefits || 'Keunggulan'}</h2>
              </div>
              <div className="space-y-2.5">
                {benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-2.5 group">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 text-sm leading-relaxed flex-1">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <PartnerGrid />

      {/* CTA Section - Compact */}
      <SectionWrapper className="bg-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary-dark to-neutral-900 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            <div className="relative z-10">
              <div className="text-center mb-5">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  {replaceProductName(t?.productDetailPage?.cta?.title || 'Tertarik dengan {productName}?')}
                </h2>
                <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
                  {t?.productDetailPage?.cta?.description || 'Hubungi tim kami untuk konsultasi dan penawaran terbaik'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <Link
                  href={`/contact?product=${encodeURIComponent(productName)}`}
                  className="group relative inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-white text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl hover:shadow-white/40 hover:scale-[1.02] active:scale-[0.98] text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {t?.productDetailPage?.actions?.consultNow || 'Konsultasi Sekarang'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(productName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white hover:text-primary hover:border-white hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {t?.productDetailPage?.actions?.chatWhatsApp || 'Chat WhatsApp'}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>

              {/* Contact Info - Compact */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5 pt-5 border-t border-white/20 text-xs">
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
                  href={`mailto:${siteConfig.contact.email}?subject=Konsultasi%20Produk%20${encodeURIComponent(productName)}`}
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

      {/* FAQ Section - Compact */}
      <SectionWrapper className="bg-neutral-50 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-2 font-semibold">
              {t?.productDetailPage?.faq?.eyebrow || 'FAQ'}
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
              {replaceProductName(t?.productDetailPage?.faq?.title || 'Pertanyaan tentang {productName}')}
            </h2>
          </div>

          <div className="space-y-2">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  {replaceProductName(t?.productDetailPage?.faq?.items?.mainBenefits?.question || 'Apa keunggulan utama {productName}?')}
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
                <ul className="space-y-1.5">
                  {benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  {replaceProductName(t?.productDetailPage?.faq?.items?.applications?.question || 'Untuk aplikasi apa saja {productName} dapat digunakan?')}
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
                <ul className="space-y-1.5">
                  {applications.map((app: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  {replaceProductName(t?.productDetailPage?.faq?.items?.howToOrder?.question || 'Bagaimana cara memesan {productName}?')}
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
                  <p>{t?.productDetailPage?.faq?.items?.howToOrder?.contactUs || 'Hubungi kami melalui:'}</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>
                        <strong>{t?.productDetailPage?.faq?.items?.howToOrder?.email || 'Email:'}</strong>{' '}
                        <a href={`mailto:${siteConfig.contact.email}?subject=Penawaran%20${encodeURIComponent(productName)}`} className="text-primary hover:underline">
                          {siteConfig.contact.email}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>
                        <strong>{t?.productDetailPage?.faq?.items?.howToOrder?.phone || 'Telepon/WhatsApp:'}</strong>{' '}
                        <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">
                          {siteConfig.contact.phone}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>
                        <strong>{t?.productDetailPage?.faq?.items?.howToOrder?.contactForm || 'Form Kontak:'}</strong>{' '}
                        <Link href={`/contact?product=${encodeURIComponent(productName)}`} className="text-primary hover:underline">
                          {t?.productDetailPage?.faq?.items?.howToOrder?.fillContactForm || 'Isi formulir kontak'}
                        </Link>
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs text-neutral-500 mt-2">
                    {t?.productDetailPage?.faq?.items?.howToOrder?.responseTime || 'Respon dalam 1×24 jam (hari kerja).'}
                  </p>
                </div>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  {replaceProductName(t?.productDetailPage?.faq?.items?.stockAvailability?.question || 'Apakah {productName} ready stock?')}
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
                {product.category === 'Electronics' || product.id === 'electronic-components' || product.id === 'plastic-resin' ? (
                  <p>
                    {replaceProductName(t?.productDetailPage?.faq?.items?.stockAvailability?.readyStock || 'Ya, {productName} tersedia ready stock di gudang Jababeka. Untuk informasi stok terkini, silakan hubungi tim kami.')}
                  </p>
                ) : product.id === 'pcba' ? (
                  <p>
                    {t?.productDetailPage?.faq?.items?.stockAvailability?.pcba || 'PCBA tersedia untuk prototype (3-7 hari kerja) dan produksi massal (3-5 minggu). Kami juga dapat membantu dengan component sourcing jika diperlukan.'}
                  </p>
                ) : product.id === 'plastic-injection' ? (
                  <p>
                    {t?.productDetailPage?.faq?.items?.stockAvailability?.plasticInjection || 'Produk injection molding dibuat sesuai order dengan lead time 1-2 minggu untuk prototype dan 3-5 minggu untuk produksi massal. Kami dapat menyediakan sample untuk testing terlebih dahulu.'}
                  </p>
                ) : (
                  <p>
                    {replaceProductName(t?.productDetailPage?.faq?.items?.stockAvailability?.varies || 'Ketersediaan {productName} bervariasi tergantung model dan spesifikasi. Silakan hubungi tim kami untuk informasi stok terkini dan lead time pengiriman.')}
                  </p>
                )}
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-md">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  {t?.productDetailPage?.faq?.items?.technicalSupport?.question || 'Apakah tersedia dukungan teknis?'}
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
                <p className="mb-2">{t?.productDetailPage?.faq?.items?.technicalSupport?.description || 'Ya, kami menyediakan:'}</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{t?.productDetailPage?.faq?.items?.technicalSupport?.items?.datasheet || 'Datasheet dan dokumentasi teknis'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{t?.productDetailPage?.faq?.items?.technicalSupport?.items?.consultation || 'Konsultasi teknis dan aplikasi'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{t?.productDetailPage?.faq?.items?.technicalSupport?.items?.training || 'Training dan support implementasi'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{t?.productDetailPage?.faq?.items?.technicalSupport?.items?.afterSales || 'Dukungan purna jual'}</span>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

