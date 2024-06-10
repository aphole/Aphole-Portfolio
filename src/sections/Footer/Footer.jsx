import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} Aphole Jean Soriano. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;