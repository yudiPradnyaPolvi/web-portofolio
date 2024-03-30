import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.avatarWrapper}>
          <img src="/avatar.jpeg" alt="avatar" className={styles.avatar} />
        </div>
        <div className={styles.contactDescription}>
          <h1>My Contact</h1>
          <p>
            My name is Pradnya, I am an undergraduate electrical engineering
            student focusing on computer engineering.During my studies, I
            studied electricity and applications computer technology, in
            particular web development.
          </p>
          <p>
            Apart from that, I also joined several organizations & learned about
            how to communicate and lead a team.
          </p>
          <p>
            With experience in lectures and organizations, I am looking for
            opportunities develop my hard skills and soft skills in the
            professional world.
          </p>
          <p>find me on my sosial media down below!</p>
          <a href="https://www.instagram.com/yudipradnya/">
            <img src="./icons/instagram.png" alt="instagram" />
          </a>
          <a href="https://wa.me/+6282135621746">
            <img src="./icons/whatsapp.png" alt="whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/yudipradnya/">
            <img src="./icons/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
