'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden bg-neutral-900">
      {/* Background image placeholder - update the path once asset is uploaded */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/corporate-team.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-neutral-900/40" />
      <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/70 to-transparent" />

      <div className="container-custom relative z-10 py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left text-white space-y-4 md:space-y-5 lg:space-y-6 animate-fade-in w-full">
          {t.hero.eyebrow && (
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/70 font-medium">
              {t.hero.eyebrow}
            </p>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] md:leading-[1.3] lg:leading-tight text-white break-words tracking-tight font-sans">
            {t.hero.title}
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 font-semibold md:font-medium leading-relaxed max-w-3xl">
            {t.hero.subtitle}
          </p>

          <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
            <Link href="/products" className="btn-primary w-full sm:w-auto text-center">
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="btn-secondary w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary text-center"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

