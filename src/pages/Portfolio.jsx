import React, {useState} from 'react'
import { Container } from "react-bootstrap"
import projectData from "../data/project-data"
import ProjectCard from "../components/ProjectCard/ProjectCard"

const Project = (props) => {
  const [projects, setProjects] = useState(projectData);
    return (
        <Container>

              <div className="portfolio-header">
              <h1>My Portfolio<span class="full-stop">:</span></h1>
              <p>Thank you for viewing my portfolio. These are some of my favorite projects that I've worked on recently. They
                represent a mixture of languages, technologies, and frameworks, and were each a unique, fun, and challenging
                experience to build. Click on any of the screenshots for any the projects to be taken to the live, deployed
                version on GitHub or Heroku!</p>
              </div>

            <div className="container">
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
