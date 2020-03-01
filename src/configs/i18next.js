import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { locales, languages } from '../translations';

i18n
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: Object.keys(languages).find((lang) => languages[lang].default),
    lng: Object.keys(languages).find((lang) => languages[lang].default),
    debug: false,
    preload: ['ru', 'en', 'be'],
    initImmediate: false,
    react: {
      wait: true,
    },
  });

if (typeof window !== 'undefined') {
  const lang = localStorage.getItem('lang');
  if (lang) {
    i18n.changeLanguage(lang);
  }
}

export default i18n;
