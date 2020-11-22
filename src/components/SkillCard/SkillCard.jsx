const SkillCard = (props) => {
    const { skill } = props;

    return (
        <div className="skill-card m-2">
            <img className="skill-icon center" src={`img/skill-icons/${skill.url}`} alt=""/>
            <p>{skill.name}</p>
        </div>
    )
}

export default SkillCard;