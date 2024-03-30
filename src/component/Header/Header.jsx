import { useState } from 'react';
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import cv from '/Cv/CV_I Kadek Yudi Pradnya Polvi.pdf'

const Header = () => {
  const [isLight, setIsLight] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgContainer}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.listMenuContainer}>
            <ul className={styles.listMenu}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
              <Link className='btnAwards'to="/Awards">Awards</Link>
              </li>
              <li>
              <Link className='btnCertificates'to="/Certificates">Certificates</Link>
              </li>
              <li>
                <Link className='btnContact'to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.hrWrapper}>
            <hr />
          </div>
          <div className={styles.downloadContainer}>
          {isLight ? (
              <SunIcon
                onClick={() => setIsLight(!isLight)}
                className={styles.sunIcon}
              />
            ) : (
              <MoonIcon
                onClick={() => setIsLight(!isLight)}
                className={styles.moonIcon}
              />
            )}
            <a href={cv}>
            <button className={styles.downloadBtn}>
              <p>Download CV</p>
            </button>
            </a>
          </div>
        </div>
        <div className={styles.drawerIconContainer}>
          <Bars3Icon onClick={toggleDrawer} className={styles.barsIcon} />
        </div>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className={styles.drawer}
      >
        <div className={styles.drawerContainer}>
          <div className={styles.drawerHeaderContainer}>
            <img src="/logo.png" alt="logo" />
            <XMarkIcon onClick={toggleDrawer} className={styles.closeIcon} />
          </div>
          <hr />
          <div className={styles.listMenuContainer}>
            <ul className={styles.listMenu}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                Link
              </li>
            </ul>
          </div>
          <hr />
          
          <div className={styles.swithThemeContainer}>
            <p>Switch Theme</p>
            {isLight ? (
              <SunIcon
                onClick={() => setIsLight(!isLight)}
                className={styles.sunIcon}
              />
            ) : (
              <MoonIcon
                onClick={() => setIsLight(!isLight)}
                className={styles.moonIcon}
              />
            )}
          </div>
          <button className={styles.downloadBtn}>
            <p>Download CV</p>
          </button>
        </div>
      </Drawer>
      
    </>
  );
};

export default Header;
