import React from 'react';

import Styles from "./Contact.module.css";
import { getImageUrl} from "../../utils";

export const Contact = () => {
  return (
    <footer className={Styles.container} id="contact">
      <div className={Styles.titles}>
        <h2>Contact</h2>
          <p>Feel free to send me a message.</p>
      </div>
      <ul className={Styles.links}>
        {/*List item for email*/}
        <li className={Styles.item}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Mail Icon"/>
          <a href="mailto:Leonardocruzprimary@gmail.com"> leonardocruzprimary@gmail.com</a>
        </li>
        {/*List item for linkedIn*/}
        <li className={Styles.item}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
              <a href="https://www.linkedin.com/in/leonardocruzprim/" target="_blank">linkedin.com/LeonardoCruz</a>
        </li>
        {/*List item for Github*/}
        <li className={Styles.item}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
              <a href="https://github.com/Leocruzjr" target="_blank">github.com/LeonardoCruz</a>
        </li>
      </ul>
    </footer>
  );
};