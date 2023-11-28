// Contact.js
import React from 'react';
import Image from 'next/image'; // Ajoutez cette ligne
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.sectionHeader}><span className={styles.redline}></span>@Contact</h1>
      <div className={styles.contactWrapper}>
        <form id="contact-form" className={styles.formHorizontal} role="form">
          <div className={styles.formGroup}>
            <div className={styles.colSm12}>
              <input type="text" className={styles.formControl} id="name" placeholder="NAME" name="name" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.colSm12}>
              <input type="email" className={styles.formControl} id="email" placeholder="EMAIL" name="email" required />
            </div>
          </div>
          <textarea className={`${styles.formControl} ${styles.textarea}`} rows="10" placeholder="MESSAGE" name="message" required></textarea>
          <button className={styles.btn + ' ' + styles.btnPrimary + ' ' + styles.sendButton} id="submit" type="submit">
            <div className={styles.altSendButton}>
              <Image src="/icones/friends_link_send_share_icon_123609.png" alt="Send" className={styles.icon} width={30} height={30} /><span className={styles.sendText}>SEND</span>
            </div>
          </button>
        </form>
        <div className={styles.directContactContainer}>
          <ul className={styles.contactList}>
            <li className={styles.listItem}><Image src="/icones/position-marker_39550.png" alt="Location" className={styles.icon} width={30} height={30} /><span className={styles.contactText}><a href="https://www.google.com/maps/d/viewer?mid=17LGe4ks6LTbjTa_YXn6827cjUvo&hl=en_US&ll=43.693197000000005%2C7.287669000000014&z=18" title="Voir Le Plan" target="_blank">  Nice, France</a></span></li>
            <li className={styles.listItem}><Image src="/icones/phone-symbol_icon-icons.com_56475.png" alt="Phone" className={styles.icon} width={30} height={30} /><span className={styles.contactText}><a href="tel:07-83-27-07-92" title="Appelez moi">  Appelez moi</a></span></li>
            <li className={styles.listItem}><Image src="/icones/3Mail732200.png" alt="Email" className={styles.icon} width={30} height={30} /><span className={styles.contactText}><a href="mailto:dgbgn01@gmail.com" title="Envoyer un email">  Me contactez</a></span></li>
          </ul>
          <hr className={styles.hr} />
          <div className={styles.contactIcon}>
            <a href="https://github.com/dg-Tech1" title="Github" target="_blank"><Image src="/icones/1github.png" alt="Github" className={styles.icon} width={30} height={30} /></a>
            <a href="https://www.linkedin.com/in/david-gagnon-webdevelopper/" title="Linkedin" target="_blank"><Image src="/icones/2linkedin3536505.png" alt="LinkedIn" className={styles.icon} width={30} height={30} /></a>
            <a href="./assets/images/200-modele-cv-sobre.pdf" download title="Mon CV"><Image src="/icones/Download_icon-icons.com_75235.png" alt="Download CV" className={styles.icon} width={30} height={30} /></a>
          </div>
          <hr className={styles.hr} />
          <div className={styles.copyright}>© ALL OF THE RIGHTS RESERVED <br /><br /> DAVID GAGNON WEB DEVELOPPER <br /><br />
            JAVASCRIPT | REACT | HTML_CSS
          </div>
        </div>
      </div>
    </section>
  );
}
