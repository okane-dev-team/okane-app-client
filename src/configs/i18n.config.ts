import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./../../public/locales/en/translation.json";
import translationUA from "./../../public/locales/ua/translation.json";

 const resources = {
   en: {
     translation: translationEN
   },
   ua: {
     translation: translationUA
   }
 };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'en',
    resources,
    detection: {
        order: ['queryString', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
