import React from 'react';
import styles from '../styles/Projets.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Image from 'next/image'; // Import the Image component from Next.js

const images = [
    { url: '/images/zBooki.webp', link: 'https://github.com/dg-Tech1/bookiprojet3', link2: 'https://dg-tech1.github.io/bookiprojet3/', description: 'Location vacances HTML-CSS' },
    { url: '/images/zOhMyFood.webp', link: 'https://github.com/dg-Tech1/ohmyfoodp4', link2: 'https://dg-tech1.github.io/ohmyfoodp4/index.html', description: 'Résevations plats HTML-CSS' },
    { url: '/images/zKasa.webp', link: 'https://github.com/dg-Tech1/kasa-ocr-p8', link2: 'https://kasa-ocr-p8.vercel.app/', description: 'Location REACT-CSS' },
    { url: '/images/zSophieBuel.webp', link: 'https://github.com/dg-Tech1/SophieBuelP6', link2: 'https://urlz.fr/oGwN', description: 'Architecte JAVASCRIPT' },
    { url: '/images/zPrintIT.webp', link: 'https://github.com/dg-Tech1/Print-it-JS-P5', link2: 'https://dg-tech1.github.io/Print-it-JS-P5/', description: 'Imprimerie JAVASCRIPT-CSS' },
    { url: '/images/zNinaCarduci.webp', link: 'https://github.com/dg-Tech1/nina-carducci-p9', link2: 'https://dg-tech1.github.io/nina-carducci-p9/', description: 'Photographe pro SEO-Optimisation' },
    { url: '/images/zArgentBank.webp', link: 'https://github.com/dg-Tech1/ArgentBank_P11', link2: 'https://github.com/dg-Tech1/ArgentBank_P11', description: 'Site Bancaire, REACT-REDUX' },
    { url: '/images/random1.jpg', link: 'https://github.com/link8', link2: 'https://linkedin.com/link8', description: 'Description 8' },
];

export default function Projets() {
    return (
        <div id="projets" className={styles.projets} style={{ backgroundImage: `url(/images/Nv2-min.gif)`, backgroundSize: 'cover' }}>
            <Carousel showThumbs={false} showStatus={false}>
                {Array(Math.ceil(images.length / 3)).fill().map((_, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        {images.slice(index * 3, (index * 3) + 3).map((image, i) => (
                            <div key={i} style={{ backgroundImage: `url(${image.url})`, width: '400px', height: '400px', backgroundSize: 'cover', position: 'relative', borderRadius: '15px', margin: '10px' }} title={image.description}>
                                <a href={image.link} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '10px', left: '10px', transition: 'transform .2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = ''}>
                                    <Image src="/icones/1github.png" alt="Github" width="16" height="16" />
                                </a>
                                <a href={image.link2} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '10px', left: '30px', transition: 'transform .2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = ''}>
                                    <Image src="/icones/link.png" alt="LinkedIn" width="16" height="16" />
                                </a>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
            <h1 className={styles.title}>Pour en savoir plus sur mes projets, cliquez sur les liens dans le carousel!</h1>
        </div>
    );
}
