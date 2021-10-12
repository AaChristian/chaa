import styles from "../styles/AboutMe.module.scss";

const getAge = (dateString: string) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutMeShort}>
        <h2>Christian Aashamar</h2>
        <p>{getAge("1989-12-11")} years old</p>
        <p>Lorem ipsum dolor, sit amet</p>
        <p>Lorem ipsum dolor, sit amet</p>
      </div>
      <div className={styles.aboutMeLong}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, hic at
          sunt nemo officia provident, qui velit ratione, corporis voluptate
          inventore! Recusandae molestiae officia in unde praesentium eligendi
          quos veniam.
        </p>
        <p>
          Illo perspiciatis ducimus quisquam optio dolorum aliquam, repellendus,
          magnam et excepturi vel corporis iure autem doloremque numquam dolore
          consequuntur itaque labore eos consectetur. Esse, in neque sunt
          blanditiis laudantium distinctio?
        </p>
      </div>
    </div>
  );
};
