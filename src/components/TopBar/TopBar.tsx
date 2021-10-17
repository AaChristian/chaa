import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";
import styles from "./TopBar.module.scss";

interface Link {
  to: string;
  label: string;
}

const homeLinks: Link[] = [
  { to: "about", label: "about" },
  { to: "technologies", label: "technologies" },
  { to: "experience", label: "experience" },
  { to: "education", label: "education" },
  { to: "contact", label: "contact" },
];

export const TopBar = () => {
  const { t } = useTranslation("sections");
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 70 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topBarClassName = classNames(styles.topBarContainer, {
    [styles.topBarContainerSticky]: isSticky,
  });

  return (
    <div className={styles.topBarWrapper}>
      <div className={topBarClassName}>
        <div className={styles.topBarLogo}>
          <Link href="/">CH.AA.</Link>
        </div>
        <input
          className={styles["burger-btn"]}
          type="checkbox"
          id="burger-btn"
        />
        <label className={styles["burger-icon"]} htmlFor="burger-btn">
          <span className={styles["navicon"]}></span>
        </label>
        <div className={styles.topBarNav}>
          <ul>
            {homeLinks.map((link) => (
              <li key={link.to}>
                <a href={`#${link.to}`}>{t(link.label)}</a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
