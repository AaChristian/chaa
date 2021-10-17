import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./Section.module.scss";

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return (
    <Fade triggerOnce delay={200}>
      <div className={styles.section} {...props}>
        {children}
      </div>
    </Fade>
  );
};
