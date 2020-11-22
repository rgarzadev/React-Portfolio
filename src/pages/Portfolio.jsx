import React, {useState} from 'react'
import { Container } from "react-bootstrap"
import portfolioData from "../data/portfolio-data"
import PortfolioItem from "../components/PortfolioItem/PortfolioItem"


const Portfolio = (props) => {
  const [projects, setProjects] = useState(portfolioData);
    return (
        <Container>
            <div class="container">

              <div class="row">
                {projects.map((project, index) =>(
                  <PortfolioItem project={project} key={index}/>
                ))}
              </div>
            </div>
        </Container>
    )
}

export default Portfolio
