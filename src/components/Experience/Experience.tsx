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
    company: "ABC Inc AS",
    title: "Developer",
    time: "January 2000 - Present",
    link: "https://nrk.no",
    description: [
      "Iure et temporibus et.",
      "Officia itaque autem laudantium dolor aliquam quia. Nostrum est et mollitia in voluptas error. Molestias vel enim iste. Voluptatem totam unde accusamus ut delectus repudiandae corporis. Magni dicta quo.",
      "Tempora quibusdam ut aut iure maiores molestiae non ducimus.",
    ],
  },
  {
    company: "Exp 2",
    title: "Developer",
    time: "January 1998 - December 1999",
    link: "https://vg.no",
    description: [
      "Iure et temporibus et.",
      "Tempora quibusdam ut aut iure maiores molestiae non ducimus.",
      "Unde accusamus ut delectus repudiandae corporis. Magni dicta quo.",
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
