import { useTranslation } from "react-i18next";
import { InlineLink } from "../InlineLink";
import { Section } from "../Section";
import styles from "./AboutMe.module.scss";

export const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  return (
    <Section id="about">
      <div className={styles.aboutMeContainer}>
        <h3>{t("myNameIs")}</h3>
        <h1>Christian Aashamar</h1>
        <h2>{t("softwareEngineer")}</h2>
        <p>{t("paragraph1")}</p>
        <p>
          {t("paragraph2")}
          &nbsp;
          <InlineLink to="https://arctic.com">Arctic</InlineLink>.
        </p>
      </div>
    </Section>
  );
};
