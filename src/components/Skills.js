import React, { useEffect, useRef } from 'react';
import styles from '../styles/Skills.module.css';
import ScrollButton from './ScrollButton';

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/TagCloud.min.js";
    script.onload = () => {
      const texts = [
        'HTML', 'ReactJS', 'JavaScript',
        'CSS3', 'MongoDB', 'NextJS',
        'SASS', 'PHP', 'MySQL',
        'Express', 'NodeJS', 'WordPress',
        'Swagger', 'SEO',
      ];

      if (containerRef.current) {
        // eslint-disable-next-line no-undef
        TagCloud(containerRef.current, texts);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="competences" >
      <h1>Mes compétences</h1>
      <div ref={containerRef} className={styles.container}></div>
      <ScrollButton direction="up" targetId="accueil" />
    </div>
  );
}