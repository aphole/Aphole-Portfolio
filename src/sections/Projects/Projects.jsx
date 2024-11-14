import React, { useEffect, useRef } from 'react';
import styles from './ProjectsStyles.module.css';
import qbyte from '../../assets/qbyte.png';
import sendcrypt from '../../assets/sendcrypt.jpg'
import doorlock from '../../assets/doorlock.jpg'
import ProjectCard from '../../theme/ProjectCard';

function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            const projectCards = entry.target.querySelectorAll(`.${styles.projectCard}`);
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles['slide-in']);
              }, index * 200); // Stagger the animations
            });
          } else {
            entry.target.classList.remove(styles.animate);
            const projectCards = entry.target.querySelectorAll(`.${styles.projectCard}`);
            projectCards.forEach((card) => {
              card.classList.remove(styles['slide-in']);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className={styles.container} ref={containerRef}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <ProjectCard
            src={doorlock}
            link="https://appdistribution.firebase.dev/i/976a50422c50a99c"
            h3="QByte"
            height="250px"
            width="150px"
            p="Door Lock App"
            status="Status: On-going Project"
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard
            src={sendcrypt}
            link="https://sendcrypt.netlify.app"
            h3="SendCrypt"
            height="250px"
            width="150px"
            p="Crypto currency"
            status="Status: On-going Project"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
