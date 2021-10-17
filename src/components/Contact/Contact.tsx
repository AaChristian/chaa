import { useTranslation } from "react-i18next";
import { Section } from "../Section";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <Section id="contact">
      <div className={styles.contactContainer}>
        <h1>{t("sections:contact")}</h1>
        <p>{t("paragraph1")}</p>
        <a href="mailto:chrizzy89@gmail.com">{t("contactMe")}</a>
      </div>
    </Section>
  );
};
