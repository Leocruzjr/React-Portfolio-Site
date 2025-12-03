import React from 'react';

import Styles from './About.module.css';
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
                        Use javascript, html, css to build responsive websites. Typescript in progress in order to work on scalable projects. 
                        </p>
                </div>
            </li>
            <li className={Styles.item}>
                <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon'/>
                <div>
                    <h3>Project Management</h3>
                        <p>
                        4+ years in construction project management, bringing deadline-driven planning, team coordination, and execution discipline to front-end development.
                        </p>
                </div>
            </li>
            <li className={Styles.item}>
                <img src={getImageUrl("about/uiIcon.png")} alt='UI Icon'/>
                <div>
                    <h3>UI Design</h3>
                        <p>
                        Design landing pages and created figma designs.
                        </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  );
};