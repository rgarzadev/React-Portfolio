import React, {useState} from 'react'
import { Container } from "react-bootstrap"
import projectData from "../data/project-data"
import ProjectCard from "../components/ProjectCard/ProjectCard"


const Project = (props) => {
  const [projects, setProjects] = useState(projectData);
    return (
        <Container>
            <div class="container">
              <div class="row">
                {projects.map((project, index) =>(
                  <ProjectCard project={project} key={index}/>
                ))}
              </div>
            </div>
        </Container>
    )
}

export default Project
