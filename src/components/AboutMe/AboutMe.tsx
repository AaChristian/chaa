/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "react-i18next";
import { InlineLink } from "../InlineLink";
import { Section } from "../Section";
import styles from "./AboutMe.module.scss";

export const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  return (
    <Section id="about">
      <div className={styles.aboutMeHeader}>
        <h3>{t("myNameIs")}</h3>
        <h1>Christian Aashamar</h1>
        <h2>{t("softwareEngineer")}</h2>
        <div className={styles.aboutMeBody}>
          <div>
            <p>{t("paragraph1")}</p>
            <p>
              {t("paragraph2")}
              &nbsp;
              <InlineLink to="https://arctic.com">Arctic</InlineLink>.
            </p>
          </div>
          <div>
            <div className={styles.portraitWrapper}>
              <img
                src={"images/portrait.jpg"}
                className={styles.portrait}
                alt="Me"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
