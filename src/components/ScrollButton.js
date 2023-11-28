// ScrollButton.js
import React from 'react';
import styles from '../styles/ScrollButton.module.css'; // Ajustez le chemin d'importation ici

const ScrollButton = ({ targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.scrollButton} ${styles.up}`} onClick={handleClick}>
      <img src="/icones/double-arrow-vertical.png" alt="Scroll Up" />
    </div>
  );
};

export default ScrollButton;
