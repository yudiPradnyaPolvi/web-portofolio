import React from "react";
import styles from "./Certificates.module.scss";
import backend from "../../assets/certificates/backend.jpg";
import sql from "../../assets/certificates/sql.jpg";
import python from "../../assets/certificates/python.jpg";
function Certificates() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Certificates</h1>
      </div>
      <div className={styles.certifContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.certifImg}>
            <img src={backend} alt="Backend" />
          </div>
          <div className={styles.content}>
            <div className={styles.certifTitle}>
              <h3>Backend</h3>
            </div>
            <div className={styles.certifFrom}>
              <h4>Productzilla Academy</h4>
            </div>
            <div className={styles.certifInfo}>
              <p>
                Learning backend from basic, built api, and deploy to server.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.certifImg}>
            <img src={sql} alt="sql" />
          </div>
          <div className={styles.content}>
            <div className={styles.certifTitle}>
              <h3>Sql Basic</h3>
            </div>
            <div className={styles.certifFrom}>
              <h4>MySkill</h4>
            </div>
            <div className={styles.certifInfo}>
              <p>Learning how to use mysql.</p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.certifImg}>
            <img src={python} alt="python" />
          </div>
          <div className={styles.content}>
            <div className={styles.certifTitle}>
              <h3>Python 101 for Data Science </h3>
            </div>
            <div className={styles.certifFrom}>
              <h4>Cognitive Class.ai</h4>
            </div>
            <div className={styles.certifInfo}>
              <p>
                Learning basic python, manipulation data use python and basic
                data science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
