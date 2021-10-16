import GitHubIcon from "@/images/github.svg";
import LinkedInIcon from "@/images/linkedin.svg";
import { ReactNode } from "react";
import { InlineLink } from "../InlineLink";
import { TopBar } from "../TopBar";
import styles from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles["layout-base"]}>
      <TopBar />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <div>Copyright © Christian Aashamar {new Date().getFullYear()}</div>
        <div>
          <InlineLink to="https://github.com/AaChristian">
            <GitHubIcon />
          </InlineLink>
          <InlineLink to="https://www.linkedin.com/in/christian-aashamar-00ba33158">
            <LinkedInIcon />
          </InlineLink>
        </div>
      </div>
    </div>
  );
};
