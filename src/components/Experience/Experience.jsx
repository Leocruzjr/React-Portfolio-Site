import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils.js";
import history from "../../data/history.json"

export const Experience = () => {
  return (
  <section id="experience">
    <h2>Experience</h2>
    <div>
        <div>
            {skills.map((skills, id) => {
                return (
                <div key={id}>
                    <div>
                        <img 
                        src={getImageUrl(skills.imageSrc)} 
                        alt={skills.title}/>
                    </div>
                    <p>{skills.title}</p>
                </div>
                );
            })};
            </div>
        <ul>
            {history.map((historyItem, id) => {
                    return (
                        <li key={id}>
                         <img 
                          src={getImageUrl(historyItem.imageSrc)} 
                          alt={`${historyItem.organization} Logo`}
                        />
                        <div>
                            <h3>{`${historyItem.role}, ${historyItem.organization}`} </h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>;
                            })}
                            </ul>           
                        </div>
                    </li>
                    )})};
        </ul>
    </div>
    </section>
  );
};