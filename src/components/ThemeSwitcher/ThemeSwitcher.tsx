import MoonIcon from "@/icons/moon.svg";
import SunIcon from "@/icons/sun.svg";
import { useEffect, useState } from "react";
import { isServer } from "src/utils/isServer";
import styles from "./ThemeSwitcher.module.scss";

type Theme = "dark" | "light";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (selectedTheme: Theme) => {
    if (theme !== selectedTheme) {
      setTheme(selectedTheme);
      document.body.classList.toggle("light-mode");
      localStorage.setItem("theme", selectedTheme);
    }
  };

  const toggleTheme = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  // Change theme from default if set in localStorage.
  useEffect(() => {
    const preferredLanguage = !isServer()
      ? localStorage.getItem("theme") || "dark"
      : null;
    if (preferredLanguage !== null && theme !== preferredLanguage) {
      changeTheme(preferredLanguage as Theme);
    }
  });

  return (
    <div className={styles.themeSwitchContainer}>
      <button onClick={() => toggleTheme()}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};
