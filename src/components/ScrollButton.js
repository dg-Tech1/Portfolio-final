// ScrollButton.js
import React from 'react';
import styles from '../styles/ScrollButton.module.css'; // Ajustez le chemin d'importation ici
import Image from 'next/image'; // Import de la composante Image

const ScrollButton = ({ targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.scrollButton} ${styles.up}`} onClick={handleClick}>
      <Image
        src="/icones/double-arrow-vertical.png"
        alt="Scroll Up"
        width={30} // Ajout de la propriété width
        height={30} // Ajout de la propriété height
      />
    </div>
  );
};

export default ScrollButton;
