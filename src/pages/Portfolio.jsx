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

            <div className="container project-container">
              <div class="row">
                {projects.map((project, index) =>(
                  <ProjectCard project={project} key={index}/>
                ))}
              </div>
            </div>

            <a name="contact"></a>

            <h2>Contact me<span class="full-stop">:</span></h2>

            <div className="contact-container" id="contact">

            <p>Thank you for visiting my portfolio site. I look forward to speaking with you.
            Please contact me by using one of the links below and I'll be happy to connect by email or phone,
            or meet with you via Zoom or your favorite video conferencing app.
            I am always interested in discussing exciting opportunities, your current or upcoming project, or
            collaboration possibilities.
            I also enjoy connecting others, so if I may be of assistance to you in any way or can make an
            introduction to help you in your networking, please feel free to reach out!
            </p>

            </div>
            
        </Container>
    )
}

export default Project
