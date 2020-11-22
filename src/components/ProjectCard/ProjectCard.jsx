const ProjectCard = (props) => {
    const { project } = props
    
    return (
        <div className="col portfolio-card m-2">
            <a href={project.url} target="_blank">
                <img className="portfolio-img" src={`img/project-img/${project.img}`} alt="project"/>   
            </a>
            <a href={project.url} target="_blank">
                <h4>{project.title}</h4>
            </a>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard
