import styles from "./AboutMe.module.scss";

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
    <div className="section" id="about">
      <div className={styles.aboutMeContainer}>
        <h1>Christian Aashamar</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          molestias repudiandae ad fuga ratione distinctio pariatur nesciunt
          laudantium cum? Veritatis exercitationem repudiandae natus, labore
          mollitia ullam accusantium alias eligendi numquam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          molestias repudiandae ad fuga ratione distinctio pariatur nesciunt
          laudantium cum? Veritatis exercitationem repudiandae natus, labore
          mollitia ullam accusantium alias eligendi numquam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          molestias repudiandae ad fuga ratione distinctio pariatur nesciunt
          laudantium cum? Veritatis exercitationem repudiandae natus, labore
          mollitia ullam accusantium alias eligendi numquam.
        </p>
      </div>
    </div>
  );
};
