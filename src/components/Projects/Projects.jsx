
import React from 'react';

import { Project } from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {Projects.map((project, id) => {
                return (
                <ProjectCard key={id} project={project}/>
                );
            })};
        </div>
    </section>
  )};