import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className={styles.contactContainer}>
        <h1>Contact</h1>
        <p>
          Feel free to contact me even though I&apos;m not currently looking for
          any new opportunities.
        </p>
        <a href="mailto:chrizzy89@gmail.com">Contact me</a>
      </div>
    </div>
  );
};
