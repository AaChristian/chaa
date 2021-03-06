import GitHubIcon from "@/icons/github.svg";
import LinkedInIcon from "@/icons/linkedin.svg";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { InlineLink } from "../InlineLink";
import { TopBar } from "../TopBar";
import styles from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const { t } = useTranslation("common");

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const closeMobileNav = () =>
      ((document.getElementById("burger-btn") as HTMLInputElement).checked =
        false);
    // Uncheck burger button when resizing. This prevents a bug when the mobile
    // nav menu is open while resizing.
    window.addEventListener(
      "resize",
      () => {
        if (!isMobile) {
          closeMobileNav();
        }
      },
      true
    );

    // Click outside mobile menu to close it
    // document.onclick = (e: any) => {
    // document.addEventListener(
    //   "mousedown",
    //   (e: any) => {
    //     if (isMobile) {
    //       if (
    //         e?.target?.class !== stylesTopBar.topBarNav &&
    //         e?.target?.id !== "burger-btn"
    //       ) {
    //         closeMobileNav();
    //       }
    //     }
    //   },
    //   true
    // );
  });

  return (
    <div className={styles["layout-base"]}>
      <TopBar />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <div>
          {t("builtWith")} Next.js {t("by")} Christian Aashamar&nbsp;-&nbsp;
          {new Date().getFullYear()}
        </div>
        <div>
          <InlineLink to="https://github.com/AaChristian" aria-label="GitHub">
            <GitHubIcon />
          </InlineLink>
          <InlineLink
            to="https://www.linkedin.com/in/christian-aashamar-00ba33158"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </InlineLink>
        </div>
      </div>
    </div>
  );
};
