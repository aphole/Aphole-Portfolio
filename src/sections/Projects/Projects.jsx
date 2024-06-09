import React, { useEffect, useRef } from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
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
            src={viberr}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Viberr"
            p="Streaming App"
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard
            src={freshBurger}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Fresh Burger"
            p="Hamburger Restaurant"
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard
            src={hipsster}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Hipsster"
            p="Glasses Shop"
          />
        </div>
        <div className={styles.projectCard}>
          <ProjectCard
            src={fitLift}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="FitLift"
            p="Fitness App"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
