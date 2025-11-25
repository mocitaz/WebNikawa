'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()
  
  // Initialize based on pathname - about and home should start transparent
  const [isInHeroSection, setIsInHeroSection] = useState(pathname === '/' || pathname === '/about')

  // Use useLayoutEffect to ensure transparent state before paint
  useLayoutEffect(() => {
    if (pathname === '/about' || pathname === '/') {
      setIsInHeroSection(true)
    }
  }, [pathname])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLangMenuOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('.language-dropdown')) {
          setIsLangMenuOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isLangMenuOpen])

  useEffect(() => {
    const checkHeroSection = () => {
      const scrollY = window.scrollY
      
      // Check if we're in hero section based on pathname
      if (pathname === '/') {
        // Home page - check hero section
        const heroSection = document.getElementById('hero-section')
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect()
          const heroBottom = heroRect.bottom
          // Consider still in hero if we haven't scrolled past it (with threshold)
          setIsInHeroSection(heroBottom > 150)
        } else {
          // Fallback: check if scrolled less than viewport height
          setIsInHeroSection(scrollY < window.innerHeight * 0.8)
        }
      } else if (pathname === '/about') {
        // About page - IDENTICAL logic to home page
        const heroSection = document.getElementById('about-hero-section')
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect()
          const heroBottom = heroRect.bottom
          // IDENTICAL threshold as home page
          setIsInHeroSection(heroBottom > 150)
        } else {
          // IDENTICAL fallback as home page
          setIsInHeroSection(scrollY < window.innerHeight * 0.8)
        }
      } else {
        // Other pages - not in hero section
        setIsInHeroSection(false)
      }
    }

    // Always start transparent for hero pages
    if (pathname === '/' || pathname === '/about') {
      setIsInHeroSection(true)
    } else {
      setIsInHeroSection(false)
    }

    // Check immediately - multiple times to ensure accuracy
    checkHeroSection()
    requestAnimationFrame(checkHeroSection)
    requestAnimationFrame(() => requestAnimationFrame(checkHeroSection))
    
    // Check after DOM is ready with multiple delays
    const timeouts = [
      setTimeout(checkHeroSection, 0),
      setTimeout(checkHeroSection, 10),
      setTimeout(checkHeroSection, 50),
      setTimeout(checkHeroSection, 100),
      setTimeout(checkHeroSection, 200),
      setTimeout(checkHeroSection, 500),
      setTimeout(checkHeroSection, 1000),
    ]
    
    window.addEventListener('scroll', checkHeroSection, { passive: true })
    window.addEventListener('resize', checkHeroSection)
    
    return () => {
      timeouts.forEach(id => clearTimeout(id))
      window.removeEventListener('scroll', checkHeroSection)
      window.removeEventListener('resize', checkHeroSection)
    }
  }, [pathname])

  const languages = [
    { code: 'id' as const, name: 'ID', label: 'Indonesia' },
    { code: 'en' as const, name: 'EN', label: 'English' },
    { code: 'zh' as const, name: '中文', label: '中文' },
  ]

  const navItems = [
    { 
      href: '/', 
      label: t.nav.home,
    },
    { 
      href: '/products', 
      label: t.nav.products,
    },
    { 
      href: '/about', 
      label: t.nav.about,
    },
    { 
      href: '/contact', 
      label: t.nav.contact,
    },
    { 
      href: '/downloads', 
      label: t.nav.downloads,
    },
  ]

  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'
  const hasHeroImage = isHomePage || isAboutPage
  const shouldBeTransparent = hasHeroImage && isInHeroSection

  // Get page-specific accent color
  const getPageAccent = () => {
    if (pathname === '/') return 'from-primary to-primary-dark'
    if (pathname === '/products') return 'from-primary to-primary-dark'
    if (pathname === '/about') return 'from-primary to-primary-dark'
    if (pathname === '/contact') return 'from-primary to-primary-dark'
    if (pathname === '/downloads') return 'from-primary to-primary-dark'
    return 'from-primary to-primary-dark'
  }

  const pageAccent = getPageAccent()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100/50'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16 px-3 md:px-4 lg:px-6">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center group z-10 relative">
            <div className="relative w-10 h-10 md:w-11 md:h-11 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/hero/logo.png"
                alt="PT Nikawa Teknika Indonesia"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
            {/* Active indicator dot for home */}
            {pathname === '/' && !shouldBeTransparent && (
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
            )}
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className={`relative flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1 border shadow-lg transition-all duration-300 ${
              shouldBeTransparent
                ? 'bg-neutral-900/75 border-neutral-700/50 shadow-neutral-900/20'
                : 'bg-white/98 border-neutral-200/60 shadow-neutral-200/30'
            }`}>
              {/* Decorative gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
              {navItems.map((item) => {
                // Better active state detection - handle exact match and sub-routes
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href + '/')) ||
                  (item.href === '/products' && pathname.startsWith('/products'))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 ${
                      isActive
                        ? shouldBeTransparent
                          ? 'text-white bg-primary/50 shadow-lg shadow-primary/30'
                          : 'text-primary bg-primary/15 shadow-md shadow-primary/20'
                        : shouldBeTransparent
                        ? 'text-white/80 hover:text-white hover:bg-neutral-800/50'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-100/70'
                    }`}
                  >
                    <span className="relative z-10 tracking-tight">
                      <span className={`hidden xl:inline ${
                        isActive ? 'font-bold' : 'font-semibold'
                      }`}>{item.label}</span>
                      <span className={`xl:hidden ${
                        isActive ? 'font-bold' : 'font-semibold'
                      }`}>{item.label.split(' ')[0]}</span>
                    </span>
                    {/* Active indicator with gradient - always visible when active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full z-20">
                        <div className={`w-full h-full bg-gradient-to-r ${pageAccent} rounded-full shadow-md ${
                          shouldBeTransparent ? 'shadow-white/40' : 'shadow-primary/40'
                        }`} />
                      </div>
                    )}
                    {/* Hover effect with gradient */}
                    {!isActive && (
                      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r ${
                        shouldBeTransparent ? 'from-white/15 to-white/8' : 'from-primary/15 to-primary/8'
                      }`} />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Language Dropdown & Mobile Menu Button */}
          <div className="flex items-center gap-1.5">
            {/* Language Dropdown - Desktop */}
            <div className="hidden lg:block relative language-dropdown">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                  shouldBeTransparent
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
                }`}
                aria-label="Select language"
                aria-expanded={isLangMenuOpen}
              >
                {/* Globe Icon */}
                <svg
                  className={`w-4 h-4 flex-shrink-0 ${shouldBeTransparent ? 'text-white/80' : 'text-neutral-600'}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                  <path d="M3 12c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5M3 12c0-2.485 4.03-4.5 9-4.5s9 2.015 9 4.5" />
                  <path d="M12 3v18" />
                </svg>
                
                {/* Language Name */}
                <span className="font-semibold">
                  {languages.find(l => l.code === language)?.name}
                </span>
                
                {/* Dropdown Arrow */}
                <svg
                  className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  } ${shouldBeTransparent ? 'text-white/70' : 'text-neutral-500'}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown Menu */}
              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div
                    className={`absolute right-0 mt-2 w-44 rounded-xl shadow-xl border z-50 overflow-hidden backdrop-blur-md ${
                      shouldBeTransparent
                        ? 'bg-neutral-900/95 border-neutral-700/50'
                        : 'bg-white/98 border-neutral-200/80'
                    }`}
                  >
                    {/* Language Options */}
                    <div className="py-1.5">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code)
                            setIsLangMenuOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between transition-all duration-200 ${
                            language === lang.code
                              ? shouldBeTransparent
                                ? 'text-white bg-primary/50'
                                : 'text-primary bg-primary/10'
                              : shouldBeTransparent
                              ? 'text-white/80 hover:text-white hover:bg-white/10'
                              : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {/* Language code/name */}
                            <span className="font-semibold min-w-[2.5rem]">{lang.name}</span>
                            {/* Language label */}
                            <span className="text-xs opacity-70">{lang.label}</span>
                          </div>
                          
                          {/* Checkmark for active language */}
                          {language === lang.code && (
                            <svg
                              className={`w-4 h-4 flex-shrink-0 ${
                                shouldBeTransparent ? 'text-white' : 'text-primary'
                              }`}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 focus:outline-none rounded-lg transition-all duration-200 z-10 relative ${
                shouldBeTransparent
                  ? 'text-white hover:text-white/90 hover:bg-white/10' 
                  : 'text-neutral-600 hover:text-primary hover:bg-neutral-100/60'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
            <div className="relative w-5 h-5">
              <svg
                className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in border-t border-neutral-200 bg-white backdrop-blur-md">
            {/* Language Selector - Mobile */}
            <div className="px-3 py-3 border-b border-neutral-200">
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                    }}
                    className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      language === lang.code
                        ? 'text-white bg-primary shadow-md'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    }`}
                  >
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-3 py-2 space-y-1">
              {navItems.map((item) => {
                // Better active state detection - handle exact match and sub-routes
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href + '/')) ||
                  (item.href === '/products' && pathname.startsWith('/products'))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative block py-3 rounded-xl px-4 transition-all duration-200 text-sm font-bold ${
                      isActive
                        ? 'text-white bg-primary shadow-md shadow-primary/20'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 relative z-10">
                      <span className={`flex-1 tracking-tight ${
                        isActive ? 'font-bold' : 'font-semibold'
                      }`}>{item.label}</span>
                      {isActive && (
                        <div className={`ml-auto w-2.5 h-2.5 rounded-full bg-white shadow-md animate-pulse`} />
                      )}
                    </div>
                    {/* Active indicator line with gradient - always visible when active */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full overflow-hidden z-20">
                        <div className="w-full h-full bg-white rounded-r-full shadow-md" />
                      </div>
                    )}
                    {/* Hover gradient effect */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-primary/15 to-transparent" />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
