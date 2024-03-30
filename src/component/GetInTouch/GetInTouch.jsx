import styles from "./GetInTouch.module.scss";
import Chip from "../Chip/Chip";
import {
  EnvelopeIcon,
  PhoneIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";

const GetInTouch = () => {
  const copyToClipboard = (text) => {
    console.log("text", text);
    navigator.clipboard.writeText(text);
  };
  return (
    <section className={styles.getInTouch}>
      <div className={styles.getInTouchContainer}>
        <Chip title="Get in touch" />
        <p className={styles.descriptionText}>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className={styles.contactContainer}>
          <div className={styles.emailWrapper}>
            <EnvelopeIcon className={styles.mailIcon} />
            <p className={styles.email}>pradnyakemenuh@gmail.com</p>
            <Square2StackIcon
              onClick={() => copyToClipboard("pradnyakemenuh@gmail.com")}
              className={styles.squareIcon}
            />
          </div>
          <div className={styles.phoneWrapper}>
            <a href="https://wa.me/+6282135621746">
              <PhoneIcon className={styles.phoneIcon} />
            </a>
            <p className={styles.phone}>+6282135621746</p>
            <Square2StackIcon
              onClick={() => copyToClipboard("+6282135621746")}
              className={styles.squareIcon}
            />
          </div>
        </div>
        <div className={styles.platformContainer}>
          <p>You may also find me on these platforms!</p>
          <div className={styles.platformIconWrapper}>
            <a href="https://github.com/yudiPradnyaPolvi">
              <img src="/icons/github.png" alt="github" />
            </a>
            <a href="https://www.instagram.com/yudipradnya/">
              <img src="/icons/instagram.png" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/yudipradnya/">
              <img src="/icons/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
