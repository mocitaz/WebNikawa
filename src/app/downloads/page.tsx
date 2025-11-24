'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import PartnerGrid from '@/components/ui/PartnerGrid'
import { siteConfig } from '@/content/site'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DownloadsPage() {
  const { t } = useLanguage()
  const companyProfile = siteConfig.downloads[0]

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-white pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-neutral-50 rounded-2xl md:rounded-3xl border border-neutral-100 p-5 md:p-6 lg:p-10">
            <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold">
                {t?.downloadsPage?.hero?.eyebrow || 'Download Center'}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 leading-tight">
                {t?.downloadsPage?.hero?.title || 'Unduh Company Profile PT Nikawa Teknika Indonesia'}
              </h1>
              <p className="text-neutral-600 text-sm md:text-base lg:text-lg leading-relaxed px-4">
                {t?.downloadsPage?.hero?.description || 'Akses dokumen resmi perusahaan dalam format PDF untuk informasi lengkap tentang produk dan layanan NTI.'}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Company Info Section */}
      <SectionWrapper className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="bg-white rounded-xl border border-neutral-100 p-4 text-center">
              <div className="text-3xl font-semibold text-primary mb-1">
                10+
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {t?.downloadsPage?.stats?.experience || 'Tahun Pengalaman'}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-100 p-4 text-center">
              <div className="text-3xl font-semibold text-primary mb-1">
                8
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {t?.downloadsPage?.stats?.productLines || 'Lini Produk'}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-100 p-4 text-center">
              <div className="text-3xl font-semibold text-primary mb-1">
                2014
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {t?.downloadsPage?.stats?.established || 'Didirikan'}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Download Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-4 md:gap-6">
            {/* Left: Download Card */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2 leading-tight">
                    {t?.downloadsPage?.download?.title || companyProfile.title}
                  </h2>
                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-4">
                    {t?.downloadsPage?.download?.description || companyProfile.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-1 bg-primary/10 rounded-full text-primary font-semibold">
                      {companyProfile.type}
                    </span>
                    <span className="text-neutral-500">
                      {companyProfile.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <a
                href={companyProfile.url}
                download
                className="btn-primary w-full inline-flex items-center justify-center text-center group mb-4"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t?.downloadsPage?.download?.button || 'Download Company Profile'}
              </a>

              {/* Info */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    {t?.downloadsPage?.download?.info || 'File PDF akan diunduh langsung ke perangkat Anda. Pastikan koneksi internet stabil.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: What's Inside */}
            <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl border border-primary/10 p-5 md:p-6 lg:p-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral-900 mb-3 md:mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t?.downloadsPage?.contents?.title || 'Isi Company Profile'}
              </h3>
              <div className="space-y-3">
                {(t?.downloadsPage?.contents?.items || []).map((item: { icon: string; text: string }, index: number) => {
                  const iconPaths: { [key: string]: string } = {
                    'company-profile': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                    'portfolio': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                    'team': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                    'achievements': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                    'contact': 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  }
                  return (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d={iconPaths[item.icon] || iconPaths['company-profile']} />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-neutral-700 flex-1">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Download Section */}
      <SectionWrapper className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-neutral-100 p-5 md:p-6 lg:p-8">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-neutral-900 leading-tight">
                {t?.downloadsPage?.whyDownload?.title || 'Mengapa Download Company Profile?'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {(t?.downloadsPage?.whyDownload?.items || []).map((item: { icon: string; text: string }, index: number) => {
                const iconPaths: { [key: string]: string } = {
                  'info': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                  'reference': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                  'portfolio': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                  'contact': 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                }
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-primary/30 hover:shadow-sm transition-all">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d={iconPaths[item.icon] || iconPaths['info']} />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed flex-1 pt-1">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <PartnerGrid />

      {/* CTA Section */}
      <SectionWrapper className="relative overflow-hidden py-8 md:py-10 lg:py-12">
        {/* Modern gradient background with animated pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,113,156,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(128,130,133,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 md:p-6 lg:p-10 xl:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6 lg:gap-8">
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-2.5">
                    <div className="w-0.5 h-6 md:h-8 bg-white/90 rounded-full" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
                      {t?.downloadsPage?.cta?.eyebrow || 'Tertarik Bekerja Sama?'}
                    </p>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                    {t?.downloadsPage?.cta?.title || 'Hubungi kami hari ini untuk konsultasi dan solusi terbaik'}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-white/85 leading-relaxed max-w-xl">
                    {t?.downloadsPage?.cta?.description || 'Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan industri Anda'}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl hover:shadow-white/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                        {t?.downloadsPage?.cta?.contactButton || 'Hubungi Kami'}
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
                        {t?.downloadsPage?.cta?.whatsappButton || 'Chat WhatsApp'}
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
    </>
  )
}
