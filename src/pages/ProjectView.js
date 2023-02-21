import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../components/ProjectList';
import { projectComb } from '../components/ProjectComb';
import GitHub from '@material-ui/icons/GitHub';
import { ArrowBack } from '@material-ui/icons';
import "../styles/ProjectView.css";

function ProjectView() {
    const { id } = useParams();
    const project = projectComb[id];
  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img className="image" src={project.image}/>
        <div className="details">
            <h2> - Overview - </h2>
            <h5 className="overview">{project.overview}</h5>
            <h5 className="link"><a href={project.link}>{project.link}</a></h5>
            <h3> - Relevant Project Skills - </h3>
            <h5 className="skills">{project.skills}</h5>
            <GitHub className="github"/>
        </div>
    </div>
  )
}

export default ProjectView