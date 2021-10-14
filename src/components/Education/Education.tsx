import styles from "./Education.module.scss";

export const Education = () => {
  return (
    <div className="section" id="education">
      <h1>Education</h1>
      <div className={styles.educationContainer}>
        <div className={styles.educationHeader}>
          <div>
            <b>Dataingeniør</b> <br />
            Bachelor i ingeniørfag -Datateknikk
          </div>
          <div className={styles.educationHeaderLocationDate}>
            Høgskolen i Sørøst-Norge
            <br />
            august2015-juni 2018
          </div>
        </div>
        <p className={styles.educationDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis
          ipsam nostrum facilis dignissimos consequatur autem, rem excepturi
          quae dolorum aperiam totam, explicabo ullam voluptas rerum cumque ex
          labore hic!
        </p>
        <p>Bacheloroppgave: HoloLens for Flight Inspection System</p>
      </div>
    </div>
  );
};
