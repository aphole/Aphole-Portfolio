import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
        <div className={styles.burgerBar}></div>
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li className={styles.navItem}>
          <Link to="hero" smooth={true} duration={500} offset={-100} onClick={toggleMenu}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="projects" smooth={true} duration={500} offset={-60} onClick={toggleMenu}>Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="skills" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="contact" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
