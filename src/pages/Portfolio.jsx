import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import projectData from "../data/project-data"
import ProjectCard from "../components/ProjectCard/ProjectCard"

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

      <h2>Contact me<span class="full-stop">:</span></h2>

      <div className="contact-container" id="contact">

        <p>Thank you for visiting my portfolio site. Please contact me by using one of the links below. 
        I'm always interested in discussing new and exciting opportunities. I also enjoy connecting
        others, so if I can be of assistance to you in your networking in any way, please feel free to reach out!
        </p>

      </div>

    </Container>
  )
}

export default Project
