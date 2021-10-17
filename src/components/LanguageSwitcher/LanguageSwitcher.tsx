import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  getLangaugeInLS,
  Language,
  setLangaugeInLS,
} from "../../providers/i18n";
import styles from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (newLanguage: Language) => {
    if (currentLanguage !== newLanguage) {
      i18n.changeLanguage(newLanguage);
      setLangaugeInLS(newLanguage);
    }
  };

  // Change language from default if set in localStorage, This is after mount to
  // prevent error of different HTML output on server and client.
  useEffect(() => {
    const preferredLanguage = getLangaugeInLS();
    if (preferredLanguage !== null && currentLanguage !== preferredLanguage) {
      i18n.changeLanguage(preferredLanguage);
    }
  });

  return (
    <div className={styles.langSwitchContainer}>
      <button
        className={currentLanguage === "en" ? styles.current : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={currentLanguage === "no" ? styles.current : ""}
        onClick={() => changeLanguage("no")}
      >
        NO
      </button>
    </div>
  );
};
