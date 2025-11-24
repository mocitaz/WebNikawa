'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PartnerGrid from '@/components/ui/PartnerGrid'
import { siteConfig } from '@/content/site'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static form - no actual submission
    alert(t?.contactPage?.form?.success || 'Thank you! Your message has been received.')
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-white pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-neutral-50 rounded-2xl md:rounded-3xl border border-neutral-100 p-5 md:p-6 lg:p-10">
            <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold">
                {t?.contactPage?.hero?.eyebrow || 'Hubungi Kami'}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-900 leading-tight">
                {t?.contactPage?.hero?.title || 'Kami siap membantu Anda'}
              </h1>
              <p className="text-neutral-600 text-sm md:text-base lg:text-lg leading-relaxed px-4">
                {t?.contactPage?.hero?.description || 'Hubungi tim kami untuk konsultasi, penawaran, atau informasi lebih lanjut tentang produk dan layanan NTI.'}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Info & Form */}
      <SectionWrapper className="bg-neutral-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-white via-neutral-50/50 to-white rounded-2xl md:rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative p-5 md:p-6 lg:p-8 xl:p-10">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -ml-12 -mb-12" />
            
            <div className="relative z-10">
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold">
                    {t?.contactPage?.contactInfo?.eyebrow || 'Informasi Kontak'}
              </p>
                </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
                  {t?.contactPage?.contactInfo?.title || 'Hubungi kami melalui berbagai saluran'}
              </h2>
            </div>
            
              <div className="space-y-3">
                <div className="group relative flex items-start gap-3 p-4 bg-gradient-to-br from-white to-neutral-50/50 rounded-xl border border-neutral-200/80 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-primary"
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
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary mb-1.5 text-sm flex items-center gap-2">
                      <span>{t?.contactPage?.contactInfo?.address?.label || 'Alamat'}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h3>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="text-xs text-neutral-700 leading-relaxed hover:text-primary transition-colors block group-hover:underline"
                  >
                    {siteConfig.contact.address.full}
                  </a>
                </div>
              </div>

                <div className="group relative flex items-start gap-3 p-4 bg-gradient-to-br from-white to-neutral-50/50 rounded-xl border border-neutral-200/80 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-primary"
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
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary mb-1.5 text-sm flex items-center gap-2">
                      <span>{t?.contactPage?.contactInfo?.email?.label || 'Email'}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-neutral-700 hover:text-primary transition-colors break-all group-hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

                <div className="group relative flex items-start gap-3 p-4 bg-gradient-to-br from-white to-neutral-50/50 rounded-xl border border-neutral-200/80 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-primary"
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
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary mb-1.5 text-sm">{t?.contactPage?.contactInfo?.phone?.label || 'Telepon & WhatsApp'}</h3>
                    <div className="space-y-1">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                        className="text-xs text-neutral-700 hover:text-primary transition-colors block group-hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                        className="text-xs text-neutral-700 hover:text-primary transition-colors inline-flex items-center gap-1.5 group-hover:underline"
                  >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {t?.contactPage?.contactInfo?.phone?.whatsapp || 'WhatsApp'}: {siteConfig.contact.whatsapp}
                  </a>
                    </div>
                </div>
              </div>

                <div className="group relative flex items-start gap-3 p-4 bg-gradient-to-br from-white to-neutral-50/50 rounded-xl border border-neutral-200/80 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-primary"
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
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary mb-1.5 text-sm">{t?.contactPage?.contactInfo?.hours?.label || 'Jam Operasional'}</h3>
                    <p className="text-xs text-neutral-700">{t?.contactPage?.contactInfo?.hours?.value || siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
              <div className="mt-5 pt-5 border-t border-neutral-200 space-y-2.5 relative z-10">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center px-5 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20BA5A] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-sm"
                >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                  {t?.contactPage?.contactInfo?.buttons?.whatsapp || 'Hubungi via WhatsApp'}
                </a>
                <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group w-full inline-flex items-center justify-center px-5 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-sm"
                style={{ backgroundColor: '#00719c' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                  {t?.contactPage?.contactInfo?.buttons?.email || 'Email Kami'}
              </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white via-neutral-50/50 to-white rounded-2xl md:rounded-3xl shadow-xl border border-neutral-100 overflow-hidden relative p-5 md:p-6 lg:p-8 xl:p-10">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-28 h-28 bg-primary/5 rounded-full blur-3xl -ml-14 -mt-14" />
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl -mr-18 -mb-18" />
            
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 font-semibold">
                    {t?.contactPage?.form?.eyebrow || 'Kirim Pesan'}
              </p>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 leading-tight">
                  {t?.contactPage?.form?.title || 'Isi formulir di bawah ini'}
              </h2>
            </div>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="group">
                <label
                  htmlFor="name"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 group-focus-within:text-primary transition-colors"
                >
                    {t?.contactPage?.form?.fields?.name?.label || 'Nama *'}
                </label>
                  <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-sm placeholder:text-neutral-400 hover:border-neutral-400"
                      placeholder={t?.contactPage?.form?.fields?.name?.placeholder || 'Nama lengkap Anda'}
                />
                    <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
              </div>

                <div className="group">
                <label
                  htmlFor="company"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 group-focus-within:text-primary transition-colors"
                >
                    {t?.contactPage?.form?.fields?.company?.label || 'Perusahaan'}
                </label>
                  <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-sm placeholder:text-neutral-400 hover:border-neutral-400"
                      placeholder={t?.contactPage?.form?.fields?.company?.placeholder || 'Nama perusahaan Anda'}
                />
                    <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
              </div>

                <div className="group">
                <label
                  htmlFor="email"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 group-focus-within:text-primary transition-colors"
                >
                    {t?.contactPage?.form?.fields?.email?.label || 'Email *'}
                </label>
                  <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-sm placeholder:text-neutral-400 hover:border-neutral-400"
                      placeholder={t?.contactPage?.form?.fields?.email?.placeholder || 'email@example.com'}
                />
                    <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
              </div>

                <div className="group">
                <label
                  htmlFor="phone"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 group-focus-within:text-primary transition-colors"
                >
                    {t?.contactPage?.form?.fields?.phone?.label || 'Telepon'}
                </label>
                  <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-sm placeholder:text-neutral-400 hover:border-neutral-400"
                      placeholder={t?.contactPage?.form?.fields?.phone?.placeholder || '+62 xxx xxxx xxxx'}
                />
                    <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
              </div>

                <div className="group">
                <label
                  htmlFor="message"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 group-focus-within:text-primary transition-colors"
                >
                    {t?.contactPage?.form?.fields?.message?.label || 'Kebutuhan / Pesan *'}
                </label>
                  <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                      className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none bg-white text-sm placeholder:text-neutral-400 hover:border-neutral-400"
                      placeholder={t?.contactPage?.form?.fields?.message?.placeholder || 'Tulis kebutuhan atau pesan Anda di sini...'}
                />
                    <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
              </div>

              <button 
                type="submit" 
                  className="group relative w-full px-5 py-3 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] text-sm overflow-hidden"
                style={{ backgroundColor: '#00719c' }}
              >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {t?.contactPage?.form?.submit || 'Kirim Pesan'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper className="bg-white py-10 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/70 mb-3 font-semibold">
              {t?.contactPage?.map?.eyebrow || 'Lokasi Kantor'}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
              {t?.contactPage?.map?.title || 'Kunjungi kantor kami di Jababeka'}
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1234567890!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMTkuOCJT IDEwN8KwMDgnNTUuNyJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="PT Nikawa Teknika Indonesia - Lokasi Kantor"
              />
            </div>
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
                      {t?.contactPage?.cta?.eyebrow || 'Siap Bekerja Sama dengan NTI?'}
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {t?.contactPage?.cta?.title || 'Hubungi kami hari ini untuk konsultasi dan solusi terbaik'}
                  </h2>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
                    {t?.contactPage?.cta?.description || 'Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan industri Anda'}
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white text-primary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-50 hover:shadow-xl hover:shadow-white/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                        {t?.contactPage?.cta?.contactButton || 'Hubungi Kami'}
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
                        {t?.contactPage?.cta?.whatsappButton || 'Chat WhatsApp'}
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
              {t?.contactPage?.faq?.eyebrow || 'Pertanyaan yang Sering Diajukan'}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-2 leading-tight">
              {t?.contactPage?.faq?.title || 'Informasi penting tentang NTI'}
            </h2>
          </div>

          <div className="space-y-2">
            {(t?.contactPage?.faq?.items || []).map((faq, index) => (
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

