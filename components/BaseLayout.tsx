import { ReactNode } from "react";
import styles from "../styles/BaseLayout.module.scss";
import { Header } from "./Header";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles["layout-base"]}>
      <Header />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        Copyright © Christian Aashamar {new Date().getFullYear()}
      </div>
    </div>
  );
};
