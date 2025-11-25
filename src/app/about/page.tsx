'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PartnerGrid from '@/components/ui/PartnerGrid'
import { siteConfig } from '@/content/site'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  
  const missionIcons = {
    quality: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    partnership: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    innovation: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    people: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    contribution: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }

  const strengthIcons = {
    portfolio: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    location: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    professional: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  }

  return (
    <>
      {/* 1. Hero Section */}
      <section id="about-hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        {/* Background: Single hero image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/hero.png"
            alt="PT Nikawa Teknika Indonesia"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80" />
        
        {/* Content */}
        <div className="container-custom relative z-10 py-20 md:py-24 lg:py-32 px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo NTI */}
            <div className="mb-5 md:mb-6 lg:mb-8">
            <Image
              src="/images/hero/logo-footer.png"
              alt="PT Nikawa Teknika Indonesia"
                width={240}
                height={80}
              className="h-auto mx-auto brightness-0 invert"
                style={{ width: 'auto', height: 'auto', maxWidth: '240px' }}
              priority
            />
          </div>
          
            {/* Tagline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight px-4">
              {t.about.hero.tagline}
          </h1>
          </div>
        </div>
      </section>

      {/* 2. Profil Perusahaan */}
      <SectionWrapper className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-6 md:gap-8 lg:gap-12">
            {/* Image - Left Side */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-lg">
              <Image
                src="/images/about/company-profile.jpg"
                alt="PT Nikawa Teknika Indonesia - Profil Perusahaan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content - Right Side */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4 md:space-y-5">
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold mb-2">
                    {t.about.profile.title}
                  </p>
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-900 leading-tight break-words">
                    Selamat Datang di
                    <br />
                    PT Nikawa Teknika Indonesia
                  </h2>
                </div>
                
                <div className="text-neutral-600 text-sm md:text-base leading-relaxed space-y-3">
                  <p>
                    PT Nikawa Teknika Indonesia didirikan pada tanggal <span className="font-bold text-neutral-900">13 Agustus 2014</span> dan berlokasi di <span className="font-bold text-neutral-900">Kawasan Industri Jababeka II, Cikarang, Bekasi</span>. Perusahaan bergerak di bidang <span className="font-bold text-neutral-900">distribusi dan penyediaan berbagai komponen elektronik serta produk plastik</span> untuk kebutuhan industri.
                  </p>
                  <p>
                    Dengan operasional yang berbasis di kawasan industri strategis, PT Nikawa Teknika Indonesia mampu melayani berbagai sektor manufaktur dan teknologi yang membutuhkan <span className="font-bold text-neutral-900">produk berkualitas tinggi serta layanan yang handal</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Identitas Perusahaan */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-5 md:mb-6 lg:mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-2 font-semibold">
              {t.about.identity.title}
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 leading-tight">
              {t.about.identity.subtitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Baris 1: Nama Resmi */}
            <div className="bg-white rounded-xl p-4 md:p-5 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">{t.about.identity.officialName}</p>
                  <p className="text-sm font-semibold text-neutral-900">{siteConfig.about.identity.name}</p>
                </div>
              </div>
            </div>

            {/* Baris 1: Tanggal Berdiri */}
            <div className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">{t.about.identity.established}</p>
                  <p className="text-sm font-semibold text-neutral-900">{siteConfig.about.identity.established}</p>
                </div>
              </div>
            </div>

            {/* Baris 2: Telepon */}
            <div className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">{t.about.identity.phone}</p>
                  <a href={`tel:${siteConfig.about.identity.phone}`} className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                    {siteConfig.about.identity.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Baris 2: Email */}
            <div className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">{t.about.identity.email}</p>
                  <a href={`mailto:${siteConfig.about.identity.email}`} className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors break-all">
                    {siteConfig.about.identity.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Baris 3: Alamat (full width) */}
            <div className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 md:col-span-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">{t.about.identity.address}</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">{siteConfig.about.identity.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Visi & Misi */}
      <SectionWrapper className="bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-4 md:gap-6">
            {/* Visi - Compact & Modern */}
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-4 font-semibold text-center lg:text-left">
                {t.about.vision.title}
              </p>
              <div className="bg-gradient-to-br from-primary via-primary-dark to-primary/90 rounded-2xl p-6 md:p-7 text-white relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-white/95">
                {t.about.vision.content}
              </p>
                </div>
            </div>
          </div>

            {/* Misi - Compact Grid */}
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-4 font-semibold text-center lg:text-left">
                {t.about.mission.title}
              </p>
              <div className="space-y-3">
                {t.about.mission.items.map((text, index) => {
                  const iconKeys = ['quality', 'partnership', 'innovation', 'people', 'contribution']
                  const icon = iconKeys[index] as keyof typeof missionIcons
                  return (
                  <div 
                    key={index} 
                    className="group bg-neutral-50 rounded-xl p-4 md:p-5 border border-neutral-200 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="flex gap-3 md:gap-4 items-center">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                        <div className="w-5 h-5">
                          {missionIcons[icon]}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed text-left">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Bidang Usaha & Produk Utama (Grid 8 kartu) */}
      <SectionWrapper className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-2 font-semibold">
              {t.about.businessFields.title}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3 leading-tight">
              {t.about.businessFields.subtitle}
            </h2>
            <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {t.about.businessFields.description}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {siteConfig.about.businessFields.map((product, index) => {
              // Safely get translated product name
              const products = t?.about?.businessFields?.products
              const translatedProduct = Array.isArray(products) ? products.find(p => p?.id === product.id) : null
              const productName = translatedProduct?.name || product.name
              return (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Gradient Overlay */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={productName}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Content */}
                <div className="p-3 md:p-4 bg-white">
                  <h4 className="text-xs md:text-sm font-bold text-neutral-900 text-center group-hover:text-primary transition-colors leading-tight">
                    {productName}
                  </h4>
                </div>
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Keunggulan Kami (Our Strength - 3 kolom besar) */}
      <SectionWrapper className="bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-2 font-semibold">
              {t.about.strengths.title}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3 leading-tight">
              {t.about.strengths.subtitle}
            </h2>
            <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {t.about.strengths.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.about.strengths.items.map((strength, index) => {
              const iconKeys = ['portfolio', 'location', 'professional']
              const icon = iconKeys[index] as keyof typeof strengthIcons
              return (
            <div
              key={index}
                className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-5 md:p-6 border border-neutral-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <div className="w-8 h-8">
                      {strengthIcons[icon]}
                    </div>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-2.5 group-hover:text-primary-dark transition-colors">
                    {strength.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
            })}
            </div>
        </div>
      </SectionWrapper>

      {/* 7. Partners Section */}
      <PartnerGrid />

      {/* 8. CTA Section */}
      <SectionWrapper className="relative overflow-hidden py-8 md:py-10">
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
                      {t.about.cta.eyebrow}
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {t.about.cta.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
                    {t.about.cta.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl hover:shadow-white/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                        {t.about.cta.contactButton}
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
                        {t.about.cta.whatsappButton}
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

      {/* 9. FAQ Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-3 font-semibold">
              {t.about.faq.title}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-2 leading-tight">
              {t.about.faq.subtitle}
            </h2>
          </div>

          <div className="space-y-2">
            {t.about.faq.items.map((faq, index) => (
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
