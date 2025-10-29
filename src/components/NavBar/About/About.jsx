import React from 'react';

import Styles from './About.module.css'
import { getImageUrl } from '../../../utils';


export const About = () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.contentLeft}>
        <h1 className={Styles.title}>ABOUT</h1>
            <img
            src={getImageUrl("about/aboutImg.png")} 
            alt="My Hero working on a laptop" 
            className={Styles.aboutImg} 
            ></img>
         </div>
        <div className={Styles.contentRight}>
            <div className={Styles.Item}>
                <h2 className={Styles.itemTitle}>Frontend Developer</h2>
                    <p className={Styles.itemDescription}>I'm a front end developer. 
                        My experience consists of using 
                        React, vite, tailwind, and node to build sites. 
                    </p>
            </div>
            <div className={Styles.Item}>
                <h2 className={Styles.itemTitle}>Frontend Developer</h2>
                    <p className={Styles.itemDescription}>I'm a front end developer. 
                        My experience consists of using 
                        React, vite, tailwind, and node to build sites. 
                    </p>
            </div>
            <div className={Styles.Item}>
                <h2 className={Styles.itemTitle}>Frontend Developer</h2>
                    <p className={Styles.itemDescription}>I'm a front end developer. 
                        My experience consists of using 
                        React, vite, tailwind, and node to build sites. 
                    </p>
            </div>
         </div>
    </section>
  );
};