import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en.json";
import translationID from "../locales/id.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      id: {
        translation: translationID
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
