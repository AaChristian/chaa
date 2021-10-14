import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className={styles.contactContainer}>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minus
          recusandae, quidem ducimus aperiam repellendus officiis adipisci
          suscipit possimus repellat atque dolorem, hic dolorum iste. Veritatis
          cumque fugit ipsum esse?
        </p>
        <a href="mailto:chrizzy89@gmail.com">Contact me</a>
      </div>
    </div>
  );
};
