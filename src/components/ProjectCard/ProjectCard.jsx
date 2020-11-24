const ProjectCard = (props) => {
    const { project } = props
    
    return (
        <div className="col project-card">
            <a href={project.url} target="_blank">
                <img className="project-img" src={`img/project-img/${project.img}`} alt="project"/>   
            </a>
            <a href={project.url} target="_blank">
                <h4>{project.title}</h4>
            </a>
            <p className="project-p">{project.description}</p>
        </div>
    )
}

export default ProjectCard
