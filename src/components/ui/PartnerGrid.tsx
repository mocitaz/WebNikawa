'use client'

import { siteConfig } from '@/content/site'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PartnerGrid() {
  const { t } = useLanguage()
  // Duplicate partners for seamless loop
  const partners = [...siteConfig.partners, ...siteConfig.partners]

  return (
    <section className="section-wrapper bg-neutral-50 py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-3">
            {t.about.partners.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t.about.partners.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t.about.partners.description}
          </p>
        </div>
        
        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex-shrink-0 bg-white rounded-lg p-4 md:p-5 border border-neutral-200/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo container */}
                <div className="relative h-12 md:h-16 w-24 md:w-32 mb-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain object-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 96px, 128px"
                    quality={90}
                  />
                </div>
                
                {/* Partner name with slide-up animation */}
                <div className="relative overflow-hidden">
                  <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <p className="text-[10px] md:text-xs font-semibold text-primary text-center leading-tight pt-1">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

