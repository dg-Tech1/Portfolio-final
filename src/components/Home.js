// Home.js
import { useEffect, useState, useMemo } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import ScrollButton from './ScrollButton';
import Image from 'next/image'; // Ajout de l'import pour la composante Image

export default function Home() {
  const images = useMemo(() => [
    '/images/random1.jpg',
    '/images/random2.jpg',
    '/images/random3.jpg'
  ], []);
  const [bgImage, setBgImage] = useState(images[0]);

  const texts = useMemo(() => ["Développeur", "Créatif", "Logique", "Curieux", "Déterminé", ":)"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (
      subIndex === texts[index].length + 1 &&
      index !== texts.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => prevIndex + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      setBgImage(images[counter]);
      counter = (counter + 1) % images.length;
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      id="accueil"
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className={styles.nav}>
        <div className={styles.icons}>
          <a
            href="https://github.com/dg-Tech1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icones/1github.png"
              alt="Github"
              width={16}
              height={16}
              title="GITHUB"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/david-gagnon-webdevelopper/"
            target="_blank"
            rel="noopener noreferrer"
            title="LINKEDIN"
          >
            <Image
              src="/icones/2linkedin3536505.png"
              alt="LinkedIn"
              width={16}
              height={16}
            />
          </a>
          <a href="mailto:dgbgn01@gmail.com">
            <Image
              src="/icones/3Mail732200.png"
              alt="Mail"
              width={16}
              height={16}
              title="MAIL"
            />
          </a>
        </div>
        <div className={styles.links}>
          <Link href="#accueil">Accueil</Link>
          <Link href="#apropos">A Propos</Link>
          <Link href="#competences">Compétences</Link>
          <Link href="#projets">Projets</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
      <div className={styles.text}>
        {`${texts[index].substring(0, subIndex)}${
          subIndex === texts[index].length ? ' |' : ''
        }`}
      </div>

      <ScrollButton direction="down" targetId="apropos" />
    </div>
  );
}
