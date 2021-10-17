import Link from "next/link";
import styles from "./TopBar.module.scss";

interface Link {
  to: string;
  label: string;
}

const homeLinks: Link[] = [
  { to: "about", label: "About" },
  { to: "technologies", label: "Technologies" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "contact", label: "Contact" },
];

export const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBarLogo}>
        <Link href="/">CH.AA.</Link>
      </div>
      <input className={styles["burger-btn"]} type="checkbox" id="burger-btn" />
      <label className={styles["burger-icon"]} htmlFor="burger-btn">
        <span className={styles["navicon"]}></span>
      </label>
      <div className={styles.topBarNav}>
        <ul>
          {homeLinks.map((link) => (
            <li key={link.to}>
              <a href={`#${link.to}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
