import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import Skillcard from "../components/SkillCard/SkillCard";
import skillData from "../data/skill-data";

const Home = (props) => {
    const [skills, setSkills] = useState(skillData);
    return (
        <Container>            
            <div className="profile-container">

                <img className="profile-img" src="img/profile.jpg" alt="Ryan Garza"/>

                <div className="profile-text">
                <h1>I'm Ryan Garza<span class="full-stop">.</span></h1>
                    <p>I'm a Full-Stack Web Developer with experience working with some of the most popular and well-known
                        programming languages and frameworks. I love learning about and experimenting with technology of all
                        kinds. My hobbies include Audio and Video Production, volunteering, Brazilian Jiu-Jitsu,
                        and building and repairing PC's.
                    </p>
                </div>

            </div>

            <div className="skills-container">
            
                <h2>My Skills<span class="full-stop">:</span></h2>
                <div className="skills">

                    {skills.map((skill, index) => {
                        return (
                            <Skillcard skill={skill} key={index} />
                        )
                    })}

                </div>
            
            </div>

        </Container>

    )
}

export default Home