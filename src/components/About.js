// About.js

import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css'; // Importez votre fichier CSS ici

const images = ['/images/image1.jpg', '/images/image2.jpg'];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes (5000 millisecondes)

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage du composant
  }, []);

  const imageStyles = {
    backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url('${images[currentImage]}')`,
    backgroundPosition: '50% 50%, 100% 50%',
    backgroundSize: 'cover, cover',
    padding: '90px 45px',
    minHeight: '700px',
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    boxSizing: 'border-box',
  };

  return (
    <div style={imageStyles} className={styles.carouselContainer} id="apropos">
      <div style={{ width: '1130px', margin: '0px auto', padding: '0px', boxSizing: 'border-box' }}>
        {/* Votre contenu existant */}
        <h1 className={styles.helloText}>
             <span className={styles.handAnimation}>Hello 👋</span></h1> 
        <p style={{ fontFamily: 'Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, sans-serif', fontWeight: 300, fontSize: '21px', maxWidth: '700px', color: 'rgb(199, 201, 211)', margin: '0px 0px 15px', lineHeight: '31.5px', padding: '0px', boxSizing: 'border-box' }}>
          Je suis David développeur web, avec une formation d’intégrateur web Bac +2 chez OpenClassroom et une expérience en <strong>HTML/CSS/SASS, JS, React, Express, Node JS, MongoDB et Wordpress</strong>. Mon objectif est de fournir des solutions web de haute qualité qui surpassent les attentes de mes clients. N’hésitez pas à me contacter pour discuter de la façon dont je peux contribuer à votre entreprise.
        </p>
        <p style={{ fontFamily: 'Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, sans-serif', fontWeight: 300, fontSize: '21px', maxWidth: '700px', color: 'rgb(199, 201, 211)', margin: '0px', lineHeight: '31.5px', marginBottom: '0px', padding: '0px', boxSizing: 'border-box' }}>
        <a   href="/images/200-modele-cv-sobre.pdf" style={{     backgroundColor: 'hsl(0, 80%, 60%)',      color: 'black', ':hover': { backgroundColor: 'hsl(139.62deg 59.09% 34.51%)' },     textDecoration: 'none',     margin: '1px 10px 1px 0px',     padding: '10px 16px',     boxSizing: 'border-box',     display: 'inline-block',     cursor: 'pointer',   }}   download chier au clic >   Mon C.V </a>        </p>
      </div>
    </div>
  );
}
