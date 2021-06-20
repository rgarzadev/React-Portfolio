import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import projectData from "../data/project-data"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import Contact from '../components/Contact/Contact'

const Project = (props) => {
  const [projects, setProjects] = useState(projectData);
  return (
    <Container>

      <div className="portfolio-header">
        <h1>My Portfolio<span class="full-stop">:</span></h1>
        <p>These projects are some of my favorites that I've worked on recently. They
        represent a mixture of languages, technologies, and frameworks, and were each a unique, fun, and challenging
                experience to build. Click on any of them to be taken to the live, deployed version on GitHub or Heroku!</p>
      </div>

      <div className="container project-container">
        <div class="row">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>

      <a name="contact"></a>

      <Contact />
    </Container>
  )
}

export default Project
