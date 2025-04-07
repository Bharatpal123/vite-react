import React, { createContext, useContext, useState, useEffect } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations
import enTranslations from '../locales/en.json'
import esTranslations from '../locales/es.json'
import frTranslations from '../locales/fr.json'

const LanguageContext = createContext()

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    localStorage.setItem('language', lng)
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      changeLanguage(savedLanguage)
    }
  }, [])

  const value = {
    language,
    changeLanguage,
    languages: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'fr', name: 'Français' }
    ]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}