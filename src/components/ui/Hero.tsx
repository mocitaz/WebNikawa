import Link from 'next/link'
import { siteConfig } from '@/content/site'

export default function Hero() {
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

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl text-left text-white space-y-6 animate-fade-in ml-0 mr-auto -ml-10 sm:-ml-16 md:-ml-20 lg:-ml-28 xl:-ml-36 2xl:-ml-44">
          {siteConfig.hero.eyebrow && (
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              {siteConfig.hero.eyebrow}
            </p>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient">
            {siteConfig.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-medium">
            {siteConfig.hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-white/70 max-w-2xl">
            {siteConfig.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-primary w-full sm:w-auto">
              {siteConfig.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="btn-secondary w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              {siteConfig.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

