import { ReactNode } from "react";
import styles from "./BaseLayout.module.scss";
import { TopBar } from "../TopBar";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles["layout-base"]}>
      <TopBar />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        Copyright © Christian Aashamar {new Date().getFullYear()}
      </div>
    </div>
  );
};
