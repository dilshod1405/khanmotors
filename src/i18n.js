// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      // Define your translations here
      uz: {
        translation: {
          hello: 'Hello, world!',
        },
      },
      // Add more language translations as needed
    },
    lng: 'uz', // default language
    fallbackLng: 'ru', // fallback language in case a translation is missing
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
