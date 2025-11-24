'use client'

import Hero from '@/components/ui/Hero'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ValueCard from '@/components/ui/ValueCard'
import ProductCard from '@/components/ui/ProductCard'
import PartnerGrid from '@/components/ui/PartnerGrid'
import { siteConfig } from '@/content/site'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function HomePage() {
  const { t } = useLanguage()
  
  return (
    <>
      <Hero />

      {/* About & Values Section */}
      <SectionWrapper id="about" className="bg-neutral-50">
        <div className="bg-white rounded-3xl shadow-lg border border-neutral-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr,1.05fr]">
            <div className="p-6 md:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-neutral-100 space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70">
                {t.home.about.title}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
                {t.home.about.heading}
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                {t.home.about.description}
              </p>
            </div>

            <div className="p-5 md:p-6 lg:p-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-4">
                <p className="text-sm uppercase tracking-[0.4em] text-primary/70">
                  {t.home.whyChoose.eyebrow}
                </p>
                <p className="text-neutral-500 text-xs md:text-sm max-w-md text-left md:text-right">
                  {t.home.whyChoose.description}
                </p>
              </div>
              <div className="divide-y divide-neutral-100">
                {t.values.map((value, index) => (
                  <div
                    key={value.title}
                    className="flex flex-col sm:flex-row sm:items-center py-3 sm:py-4 gap-2"
                  >
                    <div className="flex items-center gap-2 w-full sm:w-44">
                      <span className="text-xs font-semibold tracking-[0.25em] text-primary/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base font-semibold text-neutral-900">
                        {value.title}
                      </span>
                    </div>
                    <p className="text-neutral-600 text-sm flex-1 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Preview Section */}
      <SectionWrapper id="products" className="bg-white">
        <div className="mb-8 md:mb-12 bg-neutral-50 rounded-2xl md:rounded-3xl border border-neutral-100 p-5 md:p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-6 md:gap-8 items-center">
            <div className="space-y-3 md:space-y-4 max-w-3xl">
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70">
                {t.home.products.eyebrow}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
                {t.home.products.heading}
              </h2>
              <p className="text-neutral-600 text-sm md:text-base">
                {t.home.products.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 justify-end lg:items-end">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-3xl font-semibold text-primary">
                    {siteConfig.products.length.toString().padStart(2, '0')}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t.home.products.countLabel}
                  </p>
                </div>
                <div className="h-10 w-px bg-neutral-300 hidden lg:block" />
                <div>
                  <p className="text-3xl font-semibold text-primary">
                    03
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t.home.products.categoryLabel}
                  </p>
                </div>
              </div>
              <Link href="/products" className="btn-primary inline-flex items-center justify-center">
                {t.home.products.viewAll}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {siteConfig.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Large Project CTA Section */}
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
                      {t.home.largeProject.eyebrow}
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {t.home.largeProject.heading}
                  </h2>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
                    {t.home.largeProject.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl hover:shadow-white/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                      {t.home.largeProject.button}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services & Support Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-3">
              {t.home.services.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t.home.services.heading}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.home.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.services.items.map((service, index) => {
              const icons = [
                <svg key={0} className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>,
                <svg key={1} className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>,
                <svg key={2} className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>,
                <svg key={3} className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>,
              ]
              return (
            <div key={index} className="group bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            )
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {t.home.services.learnMore}
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <PartnerGrid />

      {/* CTA Section */}
      <SectionWrapper className="relative overflow-hidden py-8 md:py-10">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <div className="text-center mb-4 md:mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {t.home.cta.heading}
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto mb-4">
                {t.home.cta.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4 text-xs md:text-sm">
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 bg-white text-primary font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg hover:shadow-white/30 hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.home.cta.contactButton}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-primary hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t.home.cta.whatsappButton}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-white py-10 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              {t.home.faq.title}
            </h2>
            <p className="text-sm text-neutral-600">
              {t.home.faq.subtitle}
            </p>
          </div>

          <div className="space-y-2">
            {t.home.faq.items.map((faq, index) => (
            <details key={index} className="group bg-neutral-50 rounded-lg border border-neutral-200/80 overflow-hidden transition-all duration-200 hover:border-primary/40">
              <summary className="flex items-center justify-between p-3 md:p-4 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-neutral-900 pr-3">
                  {faq.question}
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
                {faq.answer}
              </div>
            </details>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

