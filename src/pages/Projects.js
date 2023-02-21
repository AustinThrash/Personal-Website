import React from 'react'
import Projectbox from '../components/Projectbox'
import "../styles/Projects.css";
import { projectList } from '../components/ProjectList';
import { projectList2 } from '../components/ProjectList2';


function Projects() {
  return (
    <div className="projects">
      <h1>-Personal Projects-</h1>
      <div className="projectList1">
        {projectList.map((project, idx) => {
          return <Projectbox id={idx} name={project.name} image={project.image} />;
        })}
      </div>
      <h1>-School Projects-</h1>
      <div className="projectList2">
        {projectList2.map((project, idx) => {
          return <Projectbox id={idx + 2} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  )
}

export default Projects