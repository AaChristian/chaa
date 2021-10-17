import { InlineLink } from "../InlineLink";
import { Section } from "../Section";
import styles from "./AboutMe.module.scss";

export const AboutMe = () => {
  return (
    <Section id="about">
      <div className={styles.aboutMeContainer}>
        <h3>Hey, my name is</h3>
        <h1>Christian Aashamar</h1>
        <h2>Software engineer</h2>
        <p>
          I am a passionate and creative person that learns fast, is solution
          oriented and execution. I have always been very interested in IT,
          especially programming and other creative work in gaming, animation
          and film. I have used a lot of my free time to learn and evolve in
          these areas. It was therefore natural for me to go to scholl as a
          computer engineer and it is amazing to work with what I love to do.
        </p>
        <p>
          I started in early/middle 2000s by creating simple websites for
          personal use using HTML and CSS. This eventually got me into creating
          websites with PHP and since 2018 I have mostly focused on building
          websites with React and Node.js, which is one of the things I do at
          &nbsp;
          <InlineLink to="https://arctic.com">Arctic</InlineLink>.
        </p>
      </div>
    </Section>
  );
};
