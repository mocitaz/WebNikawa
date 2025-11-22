'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Initialize based on pathname - about and home should start transparent
  const [isInHeroSection, setIsInHeroSection] = useState(pathname === '/' || pathname === '/about')

  // Use useLayoutEffect to ensure transparent state before paint
  useLayoutEffect(() => {
    if (pathname === '/about' || pathname === '/') {
      setIsInHeroSection(true)
    }
  }, [pathname])

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

  const navItems = [
    { 
      href: '/', 
      label: 'Beranda',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    { 
      href: '/products', 
      label: 'Produk & Layanan',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
    },
    { 
      href: '/about', 
      label: 'Tentang Kami',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    { 
      href: '/contact', 
      label: 'Kontak',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    { 
      href: '/downloads', 
      label: 'Download',
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
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
        <div className="flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center group z-10 relative">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 group-hover:scale-105">
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
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
            )}
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className={`relative flex items-center space-x-0.5 backdrop-blur-md rounded-full px-1.5 py-1 border shadow-xl transition-all duration-300 ${
              shouldBeTransparent
                ? 'bg-neutral-900/70 border-neutral-700/60 shadow-neutral-900/30'
                : 'bg-white/95 border-neutral-200/70 shadow-neutral-200/40'
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
                    className={`group relative px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? shouldBeTransparent
                          ? 'text-white bg-primary/30 shadow-lg shadow-primary/30'
                          : 'text-primary bg-primary/15 shadow-md shadow-primary/20'
                        : shouldBeTransparent
                        ? 'text-white/80 hover:text-white hover:bg-neutral-800/50'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-100/70'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <div className="relative">
                        <svg 
                          className={`w-4 h-4 transition-all duration-300 ${
                            isActive 
                              ? shouldBeTransparent 
                                ? 'scale-110 text-white' 
                                : 'scale-110 text-primary'
                              : 'group-hover:scale-110'
                          }`}
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path d={item.icon} />
                        </svg>
                        {isActive && (
                          <div className={`absolute -inset-1 bg-gradient-to-r ${pageAccent} opacity-30 blur-sm rounded-full animate-pulse`} />
                        )}
                      </div>
                      <span className={`hidden xl:inline font-medium ${
                        isActive ? 'font-semibold' : ''
                      }`}>{item.label}</span>
                      <span className={`xl:hidden font-medium ${
                        isActive ? 'font-semibold' : ''
                      }`}>{item.label.split(' ')[0]}</span>
                    </span>
                    {/* Active indicator with gradient - always visible when active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full z-20">
                        <div className={`w-full h-full bg-gradient-to-r ${pageAccent} rounded-full shadow-lg ${
                          shouldBeTransparent ? 'shadow-white/40' : 'shadow-primary/50'
                        }`} />
                      </div>
                    )}
                    {/* Hover effect with gradient */}
                    {!isActive && (
                      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${
                        shouldBeTransparent ? 'from-white/10 to-white/5' : 'from-primary/10 to-primary/5'
                      }`} />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2.5 focus:outline-none rounded-xl transition-all duration-300 z-10 relative ${
              shouldBeTransparent
                ? 'text-white hover:text-white/90 hover:bg-white/10' 
                : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <svg
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
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
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`lg:hidden animate-fade-in ${
              shouldBeTransparent
                ? 'bg-neutral-900/98 backdrop-blur-md border-t border-neutral-700/30'
                : 'border-t border-neutral-200 bg-white/98 backdrop-blur-md'
            }`}
          >
            <div className="px-4 py-3 space-y-1">
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
                    className={`group relative block py-3 rounded-xl px-4 transition-all duration-300 text-sm font-medium ${
                      isActive
                        ? shouldBeTransparent
                          ? 'text-white bg-primary/30 shadow-lg shadow-primary/30'
                          : 'text-primary bg-primary/15 shadow-md shadow-primary/20'
                        : shouldBeTransparent
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="relative">
                        <svg 
                          className={`w-5 h-5 transition-all duration-300 ${
                            isActive 
                              ? shouldBeTransparent 
                                ? 'scale-110 text-white' 
                                : 'scale-110 text-primary'
                              : 'group-hover:scale-110'
                          }`}
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path d={item.icon} />
                        </svg>
                        {isActive && (
                          <div className={`absolute -inset-1.5 bg-gradient-to-r ${pageAccent} opacity-30 blur-md rounded-full animate-pulse`} />
                        )}
                      </div>
                      <span className={`font-medium flex-1 ${
                        isActive ? 'font-semibold' : ''
                      }`}>{item.label}</span>
                      {isActive && (
                        <div className={`ml-auto w-2.5 h-2.5 rounded-full bg-gradient-to-r ${pageAccent} shadow-lg ${
                          shouldBeTransparent ? 'shadow-white/40' : 'shadow-primary/50'
                        } animate-pulse`} />
                      )}
                    </div>
                    {/* Active indicator line with gradient - always visible when active */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full overflow-hidden z-20">
                        <div className={`w-full h-full bg-gradient-to-b ${pageAccent} rounded-r-full shadow-lg ${
                          shouldBeTransparent ? 'shadow-white/40' : 'shadow-primary/50'
                        }`} />
                      </div>
                    )}
                    {/* Hover gradient effect */}
                    {!isActive && (
                      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${
                        shouldBeTransparent ? 'from-white/10 to-transparent' : 'from-primary/10 to-transparent'
                      }`} />
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
