import React from 'react';
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project, id) => {
                return (
                  <div key={id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {projects.skills.map((skill, id) => {
                        <li key={id}>{skill}</li>
                    })}
                  </ul>
                  <div>
                    <a href={project.demo}>Demo</a>
                    <a href={project.source}>Source</a>
                  </div>
                </div>
            );
          })}
  </div>
  </section>
);
};
                  