import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import styles from './About.module.scss';
import Chip from '../Chip/Chip';

const About = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };
  return (
    <section className={styles.about}>
      <Chip title="About" />
      <div className={styles.aboutContainer}>
        <Tilt options={defaultOptions}>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={styles.imgContainer}
          >
            <div className={styles.avatarWrapper}>
              <img
                src="/about-img.jpeg"
                alt="avatar"
                className={styles.avatar}
              />
            </div>
          </motion.div>
        </Tilt>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className={styles.descriptionContainer}
        >
          <div className={styles.descriptionWrapper}>
            <h1 className={styles.titleDescription}>
              Fact About Me
            </h1>
            <p className={styles.textDescription}>
            I am an undergraduate student majoring in electrical engineering spesialist computer engineering at Udayana University. 
            I am interested in the specialist technology field of web development, IoT development, and Robotic. 
            </p>
            <p className={styles.textDescription}>
              I began my journey as a web developer in 2023, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. I'm building cutting-edge web applications
              using a lot of technologies such as Expressjs, Nodejs, CodeIgniter, Laravel, Wordpress,
             Reactjs,  and much more.
            </p>
            <p className={styles.textDescription}>
              I'm  Very interested on web development 
            </p>
            <p className={styles.textDescription}>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter, Tiktok, Instagram or on Linkedin, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              My Sosial Media where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className={styles.textDescription}>
              Finally, some facts about me.
            </p>
            <div className={styles.listMenuContainer}>
              <div>
                <ul>
                  <li>B.E. in Computer Engineering</li>
                  <li> F.E. in Computer Engineering</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Iot Developer</li>
                  <li>Robotic Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
