import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InlineLink } from "../InlineLink";
import { Section } from "../Section";
import styles from "./Experience.module.scss";

interface Job {
  company: string;
  title: string;
  time: string;
  link: string;
  description: string[];
}

const jobs: Job[] = [
  {
    company: "Arctic",
    title: "experience:arctic.title",
    time: "experience:arctic.time",
    link: "https://arctic.com",
    description: [
      "experience:arctic.description1",
      "experience:arctic.description2",
    ],
  },
];

export const Experience = () => {
  const { t } = useTranslation("experience");
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <Section id="experience">
      <h1>{t("sections:experience")}</h1>
      <div className={styles.experienceContainer}>
        <div className={styles.experienceList}>
          <ul>
            {jobs.map((job, index) => (
              <li
                key={job.company}
                onClick={() => setSelectedJob(jobs[index])}
                className={
                  job.company === selectedJob.company ? styles.selected : ""
                }
              >
                {job.company}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.experienceDetails}>
          <span className={styles.experienceTitle}>{t(selectedJob.title)}</span>
          <span className={styles.experienceCompany}>
            &nbsp;@&nbsp;
            <InlineLink to={selectedJob.link}>{selectedJob.company}</InlineLink>
          </span>
          <p className={styles.experienceTime}>{t(selectedJob.time)}</p>
          <ul className={styles.experienceDescription}>
            {selectedJob.description.map((desc, descIndex) => (
              <li key={descIndex}>{t(desc)}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
