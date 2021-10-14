import styles from "./TopBar.module.scss";

export const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
