import React from 'react';

import Styles from './About.module.css'
import { getImageUrl } from '../../utils';


export const About = () => {
  return (
    <section className={Styles.container} id="about">
        <h2 className={Styles.title}>ABOUT</h2>
        <div className={Styles.content}>
            <img
            src={getImageUrl("about/aboutImg.png")} 
            alt="My Hero working on a laptop" 
            className={Styles.aboutImg} 
            ></img>
        <ul className={Styles.itemList}>
            <li className={Styles.item}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon'/>
                <div>
                    <h3>Frontend Developer</h3>
                        <p>
                        I'm a front end developer. 
                        My experience consists of 
                        building responsive and optimized sites. 
                        </p>
                </div>
            </li>
            <li className={Styles.item}>
                <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon'/>
                <div>
                    <h3>Backend</h3>
                        <p>
                        I have developed optimised back end systems. Primarily using mongoDB. 
                        </p>
                </div>
            </li>
            <li className={Styles.item}>
                <img src={getImageUrl("about/uiIcon.png")} alt='UI Icon'/>
                <div>
                    <h3>UI Design</h3>
                        <p>
                        Designed landing pages and created figma designs.
                        </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  );
};