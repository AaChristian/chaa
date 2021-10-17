import { useTranslation } from "react-i18next";
import { Section } from "../Section";
import styles from "./Education.module.scss";

export const Education = () => {
  const { t } = useTranslation("education");

  return (
    <Section id="education">
      <h1>{t("sections:education")}</h1>
      <div className={styles.educationContainer}>
        <div className={styles.educationHeader}>
          <b>{t("degree")}</b> <br />
          <h2>
            {t("school")}
            <br />
            {t("time")}
          </h2>
        </div>
        <div className={styles.educationBulletPoints}>
          <div>{t("bulletPoint1")}</div>
          <div>{t("bulletPoint2")}</div>
          <div>{t("bulletPoint3")}</div>
          <div>{t("bulletPoint4")}</div>
          <div>{t("bulletPoint5")}</div>
          <div>{t("bulletPoint6")}</div>
        </div>
        <p></p>
        <p>{t("bachelorThesis")}: HoloLens for Flight Inspection System</p>
      </div>
    </Section>
  );
};
