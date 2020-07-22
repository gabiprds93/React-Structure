import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import spanish from '../../assets/lang/es.json'
import english from '../../assets/lang/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: english
      },
      es: {
        translations: spanish
      }
    },
    //lng: "en",
    fallbackLng: "es",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;