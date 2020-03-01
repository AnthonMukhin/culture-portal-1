import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { locales, languages } from '../translations';

let currentLanguage = Object.keys(languages).find((lang) => languages[lang].default);
if (typeof window !== 'undefined') {
  const lang = localStorage.getItem('lang');
  if (lang) {
    currentLanguage = lang;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: currentLanguage,
    lng: currentLanguage,
    debug: false,
    preload: ['ru', 'en', 'be'],
    initImmediate: false,
    react: {
      wait: true,
    },
  });

export default i18n;
