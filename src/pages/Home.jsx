import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import skillData from "../data/skill-data";

import Skillcard from "../components/SkillCard/SkillCard";

const Home = (props) => {

    const [skills, setSkills] = useState(skillData);

    return (
        <Container>
            <div id="home-container">
            <img id="profile-img" src="img/profile.jpg" alt="Ryan Garza"/>
            <div id="home-text">
            <h1>I'm Ryan Garza.</h1>
            <p>I'm a Full-Stack Web Developer with experience working with some of the most popular and well-known
                programming languages and frameworks. I love learning about and experimenting with technology of all
                kinds. My hobbies include Audio and Video Production, volunteering, Brazilian Jiu-Jitsu,
                and building and repairing PC's.
            </p>
            </div>
            </div>
            <h2>My Skills.</h2>
            <div className="skills">

                {skills.map((skill, index) => {
                    return (
                        <Skillcard skill={skill} key={index} />
                    )
                })}

            {/* <img className="skill-img center" src="img\icons\react-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\javascript-original.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\jquery-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\nodejs-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\npm-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\express-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\mongodb-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\mysql-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\sequelize-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\git-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\github-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\heroku-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\css3-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\html5-original-wordmark.svg" alt="javascript"/>
            <img className="skill-img center" src="img\icons\adobe cc.png" alt="javascript"/>
            <img className="skill-img center" src="img\icons\wordpress-original.svg" alt="javascript"/> */}
            </div>           

        </Container>

    )
}

export default Home
