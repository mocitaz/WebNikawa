'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof import('../locales/id').translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Use default translations if not loaded yet
// Import default from id.ts synchronously for type safety
import { translations as idTranslations } from '../locales/id'

function getDefaultTranslations(): typeof import('../locales/id').translations {
  return idTranslations
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Import default translations synchronously for immediate availability
  const defaultTranslations = getDefaultTranslations()
  const [language, setLanguageState] = useState<Language>('id')
  const [translations, setTranslations] = useState<typeof import('../locales/id').translations>(defaultTranslations)
  const [isClient, setIsClient] = useState(false)

  // Load default translations immediately
  useEffect(() => {
    setIsClient(true)
    // Load default translations first
    import('../locales/id').then((module) => {
      setTranslations(module.translations)
    })
    // Load language from localStorage or default to 'id'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['id', 'en', 'zh'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Dynamically import translations based on language
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}`)
        setTranslations(translationModule.translations)
      } catch (error) {
        console.error('Failed to load translations:', error)
        // Fallback to Indonesian
        const fallbackModule = await import('../locales/id')
        setTranslations(fallbackModule.translations)
      }
    }
    if (isClient) {
      loadTranslations()
    }
  }, [language, isClient])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (isClient) {
      localStorage.setItem('language', lang)
    }
  }

  // Always ensure translations are available
  const currentTranslations = translations || getDefaultTranslations()

  // Ensure translations object is always valid
  if (!currentTranslations || typeof currentTranslations !== 'object') {
    console.error('Invalid translations object, using defaults')
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t: getDefaultTranslations() }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

