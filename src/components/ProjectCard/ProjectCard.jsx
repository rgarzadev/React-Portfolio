const ProjectCard = (props) => {
    const { project } = props
    
    return (
        <div className="col project-card github-repo-links">
            <a href={project.url} target="_blank" rel="noreferrer">
                <img className="project-img" src={`img/project-img/${project.img}`} alt="project"/>   
                <h4>{project.title}</h4>
            </a>
            <a href={project.repository} target="_blank" rel="noreferrer">Github Repository</a>
            <p className="project-p">{project.description}</p>
        </div>
    )
}

export default ProjectCard
