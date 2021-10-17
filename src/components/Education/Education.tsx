import { Section } from "../Section";
import styles from "./Education.module.scss";

export const Education = () => {
  return (
    <Section id="education">
      <h1>Education</h1>
      <div className={styles.educationContainer}>
        <div className={styles.educationHeader}>
          <b>Computer engineer</b> <br />
          <h2>
            University of South-Eastern Norway
            <br />
            August 2015 - June 2018
          </h2>
        </div>
        <div className={styles.educationBulletPoints}>
          <div>Applications and website programming</div>
          <div>Network and network safety</div>
          <div>Penetration testing</div>
          <div>Algorithms and optimization</div>
          <div>Databases and operating systems</div>
          <div>Business economics</div>
        </div>
        <p></p>
        <p>Bachelor thesis: HoloLens for Flight Inspection System</p>
      </div>
    </Section>
  );
};
