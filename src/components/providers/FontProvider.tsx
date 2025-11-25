'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FontProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    const body = document.body
    const html = document.documentElement
    
    // Remove all font classes first
    body.classList.remove('font-chinese', 'font-default')
    html.classList.remove('font-chinese', 'font-default')
    
    // Apply font based on language - using CSS classes instead of inline styles
    // This ensures consistency across all platforms
    if (language === 'zh') {
      body.classList.add('font-chinese')
      html.classList.add('font-chinese')
    } else {
      body.classList.add('font-default')
      html.classList.add('font-default')
    }
  }, [language])

  return <>{children}</>
}

