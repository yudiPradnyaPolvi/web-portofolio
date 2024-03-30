import React from "react";
import styles from "./Awards.module.scss";
import goldmedalMec2 from "../../assets/awards/gold_mec2.jpg";
import innopa from "../../assets/awards/gold_innopa.jpg";
import itera from "../../assets/awards/itera.jpg";

function Awards() {
  return (
    <div className={styles.awardsContainer}>
      <div className={styles.awardsTitle}>
        <h1>My Achivement</h1>
      </div>
      <div className={styles.listAwards}>
        <div className={styles.listTitle}>
          <h3>Gold Medal Mandalika Essay Competition</h3>
        </div>
        <div className={styles.awardsImg}>
          <img src={goldmedalMec2} alt="gold mandalika" />
        </div>
        <div className={styles.awardsDescription}>
          <p>
            March 7 2023, i and my friend went to Lombok to competition. We got
            a Gold Medal in the tourism category, best popular poster and 4th in
            all category. we built ui/ux design applications for tourism use
            figma. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti, repellendus optio, sint libero mollitia odit, quis
            voluptatibus saepe magni at suscipit repudiandae nam facilis
            aliquam. Dolorum quia tempora impedit reiciendis!
          </p>
        </div>
      </div>

      <div className={styles.listAwards}>
        <div className={styles.listTitle}>
          <h3>Gold Medal Indonesia Inventors Day</h3>
        </div>
        <div className={styles.awardsImg}>
          <img src={innopa} alt="Innopa" />
        </div>
        <div className={styles.awardsDescription}>
          <p>
            october 2022, my team joined research paper competition in indonesia
            Inventors Day. We got gold medal in Education Category. We built web
            provide education for electrical hazards use framework. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Maiores soluta ratione
            vero hic voluptate. Ad voluptas ipsum, soluta ullam quibusdam a
            commodi, doloremque perspiciatis, dolor quis maxime labore facilis
            dignissimos?
          </p>
        </div>
      </div>

      <div className={styles.listAwards}>
        <div className={styles.listTitle}>
          <h3>1st Winner Research Paper in Elite Event from ITERA</h3>
        </div>
        <div className={styles.awardsImg}>
          <img src={itera} alt="Winner-Elite" />
        </div>
        <div className={styles.awardsDescription}>
          <p>
            November 2022, My Team make design technology use solar panels and
            iot system to get data from machine. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis temporibus possimus tempora,
            rem nobis fugit, quaerat esse sapiente error totam veniam, voluptate
            illo minus ratione corrupti numquam necessitatibus quae illum.
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <a href="/">
            <button className={styles.btnBack}>back to home</button>
          </a>
        </div>

        <img
          src="/icons/copyright.png"
          alt="copyright"
          className={styles.copyRightIcon}
        />
        <p className={styles.text}>
          2024 | Designed and coded with ❤️️ by Pradnya
        </p>
      </div>
    </div>
  );
}

export default Awards;
