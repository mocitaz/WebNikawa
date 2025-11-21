'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const checkHeroSection = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      
      // Check if we're still in Hero section
      if (pathname === '/') {
        const heroSection = document.getElementById('hero-section')
        if (heroSection) {
          const heroHeight = heroSection.getBoundingClientRect().height
          setIsInHeroSection(scrollY < heroHeight - 100)
        } else {
          setIsInHeroSection(false)
        }
      } else if (pathname === '/about') {
        // Check for hero section in about page
        const heroSection = document.getElementById('about-hero-section')
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect()
          const heroHeight = rect.height
          // Check if we're still within the hero section
          setIsInHeroSection(scrollY < heroHeight - 100)
        } else {
          // Default to true for about page on initial load
          setIsInHeroSection(scrollY < window.innerHeight)
        }
      } else {
        setIsInHeroSection(false)
      }
    }

    // Reset state when pathname changes
    if (pathname === '/' || pathname === '/about') {
      setIsInHeroSection(true)
      setScrolled(false)
    } else {
      setIsInHeroSection(false)
    }

    // Check immediately
    checkHeroSection()
    
    // Check again after DOM is ready
    const timeoutId1 = setTimeout(checkHeroSection, 50)
    const timeoutId2 = setTimeout(checkHeroSection, 200)
    const timeoutId3 = setTimeout(checkHeroSection, 500)
    
    window.addEventListener('scroll', checkHeroSection, { passive: true })
    window.addEventListener('resize', checkHeroSection)
    return () => {
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
      clearTimeout(timeoutId3)
      window.removeEventListener('scroll', checkHeroSection)
      window.removeEventListener('resize', checkHeroSection)
    }
  }, [pathname])

  const navItems = [
    { href: '/', label: 'Beranda' },
    { href: '/products', label: 'Produk & Layanan' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/contact', label: 'Kontak' },
    { href: '/downloads', label: 'Download' },
  ]

  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'
  // For about page, be transparent if in hero section OR if not scrolled yet
  const shouldBeTransparent = (isHomePage && isInHeroSection) || (isAboutPage && (isInHeroSection || !scrolled))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? 'bg-transparent' 
          : scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center group z-10">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/images/hero/logo.png"
                alt="PT Nikawa Teknika Indonesia"
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex items-center space-x-1 backdrop-blur-md rounded-full px-2 py-1.5 border shadow-sm transition-all duration-300 ${
              shouldBeTransparent
                ? 'bg-neutral-900/60 border-neutral-700/50'
                : 'bg-white/80 border-neutral-200/50'
            }`}>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                      isActive
                        ? shouldBeTransparent
                          ? 'text-white bg-neutral-800/80'
                          : 'text-primary bg-primary/10'
                        : shouldBeTransparent
                        ? 'text-white/90 hover:text-white hover:bg-neutral-800/40'
                        : scrolled
                        ? 'text-neutral-700 hover:text-primary hover:bg-neutral-100/50'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-100/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 focus:outline-none rounded-lg transition-colors z-10 ${
              shouldBeTransparent
                ? 'text-white hover:text-white/70' 
                : scrolled 
                ? 'text-neutral-700 hover:text-primary hover:bg-neutral-100' 
                : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`lg:hidden animate-fade-in ${
              shouldBeTransparent
                ? 'bg-neutral-900/98 backdrop-blur-md'
                : scrolled 
                ? 'border-t border-neutral-200 bg-white' 
                : 'bg-white/95 backdrop-blur-md'
            }`}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2.5 rounded-lg px-4 transition-colors text-sm font-medium ${
                      isActive
                        ? shouldBeTransparent
                          ? 'text-white bg-white/20'
                          : scrolled
                          ? 'text-primary bg-primary/10'
                          : 'text-primary bg-primary/10'
                        : shouldBeTransparent
                        ? 'text-white hover:text-white/90 hover:bg-white/10'
                        : scrolled
                        ? 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                        : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                    }`}
                  >
                    {item.label}
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

