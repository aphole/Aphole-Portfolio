import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';


function ProjectCard({ src, link, h3, p, status, height, width }) {
  return (
    <a href={link} target="_blank">
          
        <img 
          src={src} 
          alt={`${h3} logo`} 
          style={{ height, width }} 
        />
        <div className={styles.cardContent}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <p>{status}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
