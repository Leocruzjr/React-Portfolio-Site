import React from "react";

import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils.js";
import history from "../../data/history.json";
import Styles from "./Experience.module.css";

export const Experience = () => {
  return (
  <section id="experience" className={Styles.container}>
    <h2 className={Styles.title}>Experience</h2>
    <div className={Styles.content}>
        <div className={Styles.skills}>
            {skills.map((skills, id) => {
                return (
                <div key={id} className={Styles.skill}>
                    <div className={Styles.skillImageContainer}>
                        <img
                        src={getImageUrl(skills.imageSrc)} 
                        alt={skills.title}/>
                    </div>
                    <p>{skills.title}</p>
                </div>
                )
            })}
            </div>
        <ul className={Styles.experience}>
            {history.map((historyItem, id) => {
                    return (
                        <li key={id} className={Styles.experienceItem}>
                         <img 
                          src={getImageUrl(historyItem.imageSrc)} 
                          alt={`${historyItem.organization} Logo`}
                        />
                        <div className={Styles.experienceItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organization}`} </h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                            })}
                            </ul>           
                        </div>
                    </li>
                    )})}
        </ul>
    </div>
    </section>
  )
}