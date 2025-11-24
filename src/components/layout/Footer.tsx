'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/content/site'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: t?.nav?.home || 'Beranda' },
    { href: '/products', label: t?.nav?.products || 'Produk & Layanan' },
    { href: '/about', label: t?.nav?.about || 'Tentang Kami' },
    { href: '/contact', label: t?.nav?.contact || 'Kontak' },
    { href: '/downloads', label: t?.nav?.downloads || 'Download' },
  ]

  const productCategories = [
    { key: 'Electronics', name: t?.products?.categories?.Electronics || 'Electronic Components' },
    { key: 'Manufacturing', name: 'PCBA' },
    { key: 'Electronics', name: 'GSM Modem' },
    { key: 'Materials', name: t?.products?.categories?.Materials || 'Plastic Resin' },
    { key: 'Manufacturing', name: 'Plastic Injection' },
    { key: 'Infrastructure', name: 'Smart Water Meter' },
  ]

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="container-custom py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8 lg:mb-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 md:mb-4">
              <Image
                src="/images/hero/logo-footer.png"
                alt="PT Nikawa Teknika Indonesia"
                width={140}
                height={44}
                className="h-auto max-w-[140px] md:max-w-[160px]"
                priority
              />
            </div>
            <p className="text-sm md:text-base font-semibold text-neutral-900 mb-1.5 md:mb-2">
              {siteConfig.company.name}
            </p>
            <p className="text-xs md:text-sm text-neutral-600 mb-3 md:mb-4 leading-relaxed">
              {t?.footer?.tagline || siteConfig.company.tagline}
            </p>
            <div className="space-y-1.5 md:space-y-2">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                {t?.footer?.distributorOf || 'Distributor of:'}
              </p>
              <ul className="space-y-1 text-xs text-neutral-600">
                {productCategories.map((category, index) => (
                  <li key={index} className="flex items-center gap-1.5 md:gap-2">
                    <span className="text-primary">•</span>
                    <span className="break-words">{category.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold text-neutral-900 mb-3 md:mb-4 uppercase tracking-wide">
              {t?.footer?.navigation || 'Navigasi'}
            </h3>
            <ul className="space-y-2 md:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-neutral-600 hover:text-primary transition-colors inline-flex items-center gap-1.5 md:gap-2 group"
                  >
                    <svg
                      className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="break-words">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
              <div>
            <h3 className="text-xs md:text-sm font-semibold text-neutral-900 mb-3 md:mb-4 uppercase tracking-wide">
              {t?.footer?.contact || 'Kontak'}
            </h3>
            <div className="space-y-2.5 md:space-y-3">
              {/* Phone */}
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 mt-0.5">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                    className="text-xs md:text-sm text-neutral-700 hover:text-primary transition-colors block break-words"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-primary transition-colors block mt-0.5 md:mt-1 break-words"
                  >
                    {t?.footer?.whatsapp || 'WhatsApp'}: {siteConfig.contact.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 mt-0.5">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs md:text-sm text-neutral-700 hover:text-primary transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 mt-0.5">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-neutral-700 hover:text-primary transition-colors leading-relaxed block break-words"
                  >
                    {siteConfig.contact.address.full}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2 md:gap-3">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 mt-0.5">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs md:text-sm text-neutral-700 break-words">
                  {t?.contactPage?.contactInfo?.hours?.value || siteConfig.contact.hours}
                </p>
              </div>
            </div>
          </div>

          {/* About & Legal */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold text-neutral-900 mb-3 md:mb-4 uppercase tracking-wide">
              {t?.footer?.information || 'Informasi'}
            </h3>
            <div className="space-y-2.5 md:space-y-3">
              <div>
                <p className="text-xs text-neutral-500 mb-0.5 md:mb-1">{t?.footer?.established || 'Didirikan'}</p>
                <p className="text-xs md:text-sm text-neutral-700 break-words">{siteConfig.company.established}</p>
        </div>
              <div>
                <p className="text-xs text-neutral-500 mb-1.5 md:mb-2">{t?.footer?.legal || 'Legal'}</p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li>
              <Link
                href="/privacy"
                      className="text-xs md:text-sm text-neutral-600 hover:text-primary transition-colors inline-flex items-center gap-1.5 md:gap-2 group"
              >
                      <svg
                        className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="break-words">{t?.footer?.privacyPolicy || 'Privacy Policy'}</span>
              </Link>
                  </li>
                  <li>
              <Link
                href="/contact"
                      className="text-xs md:text-sm text-neutral-600 hover:text-primary transition-colors inline-flex items-center gap-1.5 md:gap-2 group"
              >
                      <svg
                        className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="break-words">{t?.footer?.contactUs || t?.common?.contactUs || 'Hubungi Kami'}</span>
              </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-4 md:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs text-neutral-500 text-center sm:text-left break-words">
              © {currentYear} {siteConfig.company.name}. {t?.footer?.allRightsReserved || 'All rights reserved.'}
            </p>
            <p className="text-xs text-neutral-400 text-center sm:text-right break-words">
              {t?.footer?.philosophy || siteConfig.company.philosophy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

