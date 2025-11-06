import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Leonardo</h1>
            <p className={styles.description}>I'm a front-end software developer. I use HTML, CSS, JavaScript and more to create responsive sites and webapps. 
                Reach out if you'd like to learn more!
            </p>
            <a href="mailto: Leonardocruzprimary@gmail.com" className={styles.contactBtn}>Contact me</a>
    </div>
    <img
    src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
  );
};
 