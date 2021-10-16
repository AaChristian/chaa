import { useState } from "react";
import styles from "./Experience.module.scss";
import { InlineLink } from "../InlineLink";

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
    title: "Developer",
    time: "August 2018 - Present",
    link: "https://arctic.com",
    description: [
      "Create internal and external websites for employees and customers",
      "Inegrate internal systems with websites and batch jobs",
    ],
  },
];

export const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div className="section" id="experience">
      <h1>Experience</h1>
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
          <span className={styles.experienceTitle}>{selectedJob.title}</span>
          <span className={styles.experienceCompany}>
            &nbsp;@&nbsp;
            <InlineLink to={selectedJob.link}>{selectedJob.company}</InlineLink>
          </span>
          <p className={styles.experienceTime}>{selectedJob.time}</p>
          <ul className={styles.experienceDescription}>
            {selectedJob.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
