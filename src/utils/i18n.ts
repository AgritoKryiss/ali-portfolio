/**
 * Internationalization (i18n) setup
 * Supports multiple languages for the portfolio
 */

export type Language = 'en' | 'es' | 'fr' | 'de' | 'ar'

interface TranslationKeys {
  [key: string]: string
}

type Translations = {
  [lang in Language]: TranslationKeys
}


export const translations: Translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_portfolio: 'Portfolio',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    hero_title: 'Senior WordPress Developer',
    hero_subtitle: '7+ years of expertise in building scalable WordPress solutions',
    about_title: 'About Me',
    portfolio_title: 'Portfolio',
    services_title: 'Services',
    blog_title: 'Blog & Insights',
    contact_title: 'Get In Touch',
    footer_copyright: '© 2026 Ali Haider. All rights reserved.',
  },
  es: {
    nav_home: 'Inicio',
    nav_about: 'Acerca de',
    nav_portfolio: 'Portafolio',
    nav_services: 'Servicios',
    nav_blog: 'Blog',
    nav_contact: 'Contacto',
    hero_title: 'Desarrollador Senior de WordPress',
    hero_subtitle: '7+ años de experiencia en soluciones escalables de WordPress',
    about_title: 'Acerca de mí',
    portfolio_title: 'Portafolio',
    services_title: 'Servicios',
    blog_title: 'Blog e Insights',
    contact_title: 'Ponte en contacto',
    footer_copyright: '© 2026 Ali Haider. Todos los derechos reservados.',
  },
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_portfolio: 'Portefeuille',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    hero_title: 'Développeur WordPress Senior',
    hero_subtitle: '7+ ans d\'expertise dans les solutions WordPress scalables',
    about_title: 'À propos',
    portfolio_title: 'Portefeuille',
    services_title: 'Services',
    blog_title: 'Blog et Insights',
    contact_title: 'Nous contacter',
    footer_copyright: '© 2026 Ali Haider. Tous droits réservés.',
  },
  de: {
    nav_home: 'Startseite',
    nav_about: 'Über mich',
    nav_portfolio: 'Portfolio',
    nav_services: 'Dienstleistungen',
    nav_blog: 'Blog',
    nav_contact: 'Kontakt',
    hero_title: 'Senior WordPress Entwickler',
    hero_subtitle: '7+ Jahre Erfahrung im Aufbau skalierbarer WordPress-Lösungen',
    about_title: 'Über mich',
    portfolio_title: 'Portfolio',
    services_title: 'Dienstleistungen',
    blog_title: 'Blog und Einblicke',
    contact_title: 'Kontakt aufnehmen',
    footer_copyright: '© 2026 Ali Haider. Alle Rechte vorbehalten.',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'معلومات عني',
    nav_portfolio: 'محفظتي',
    nav_services: 'الخدمات',
    nav_blog: 'المدونة',
    nav_contact: 'تواصل معنا',
    hero_title: 'مطور WordPress كبير',
    hero_subtitle: '7+ سنوات من الخبرة في بناء حلول WordPress قابلة للتوسع',
    about_title: 'معلومات عني',
    portfolio_title: 'محفظتي',
    services_title: 'الخدمات',
    blog_title: 'المدونة والرؤى',
    contact_title: 'تواصل معنا',
    footer_copyright: '© 2026 علي حيدر. جميع الحقوق محفوظة.',
  },
}

export const i18n = {
  currentLanguage: (localStorage.getItem('language') as Language) || 'en',

  t(key: string): string {
    const lang = this.currentLanguage
    return translations[lang][key] || translations.en[key] || key
  },

  setLanguage(lang: Language): void {
    this.currentLanguage = lang
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  },

  getLanguages(): Language[] {
    return Object.keys(translations) as Language[]
  },
}

// Hook for React
import React from 'react'

export function useI18n() {
  const [language, setLanguage] = React.useState<Language>(i18n.currentLanguage)

  const changeLanguage = (lang: Language) => {
    i18n.setLanguage(lang)
    setLanguage(lang)
  }

  const t = (key: string) => i18n.t(key)

  return { language, changeLanguage, t, availableLanguages: i18n.getLanguages() }
}
