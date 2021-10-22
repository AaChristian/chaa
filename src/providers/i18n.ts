import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { isServer } from "src/utils/isServer";
import resources from "../translations";
import { environment } from "./config";

export type Language = "en" | "no"

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: environment === "development",
  keySeparator: ".",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

i18n.on('languageChanged', (lng: Language) => !isServer() && document.documentElement.setAttribute('lang', lng))

export const getLangaugeInLS = () => {
  return !isServer() ? localStorage.getItem("langauge") || "en" : null;
};

export const setLangaugeInLS = (newLangauge: Language) => {
  localStorage.setItem("langauge", newLangauge);
};

export default i18n;