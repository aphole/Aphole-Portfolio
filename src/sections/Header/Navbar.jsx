// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavbarStyles.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="hero" smooth={true} duration={500} offset={-100}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="projects" smooth={true} duration={500} offset={-60}>Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="skills" smooth={true} duration={500} offset={-50}>Skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="contact" smooth={true} duration={500} offset={-50}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
