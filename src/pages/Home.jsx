import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import Skillcard from "../components/SkillCard/SkillCard";
import skillData from "../data/skill-data";

const Home = (props) => {
    const [skills, setSkills] = useState(skillData);
    return (
        <Container>
            <div className="profile-container row">

                <div className="profile-img-div col-md-3">
                    <img className="profile-img" src="img/profile.jpg" alt="Ryan Garza" />
                </div>

                <div className="profile-text col-md-9">
                    <h1>I'm Ryan Garza<span class="full-stop">:</span></h1>
                    <p>I'm a Full-Stack Web Developer with experience working with some of the most popular and well-known
                    programming languages and frameworks. I love learning about and experimenting with technology of all
                    kinds. My hobbies include Audio and Video Production, volunteering, Brazilian Jiu-Jitsu,
                    and building and repairing PC's.
                    </p>
                </div>

            </div>

            <h2>My Skills<span class="full-stop">:</span></h2>


            <div className="skills-container">

                <div className="skills">

                    {skills.map((skill, index) => {
                        return (
                            <Skillcard skill={skill} key={index} />
                        )
                    })}

                </div>

            </div>


            <a name="contact"></a>

            <h2>Contact me<span class="full-stop">:</span></h2>

            <div className="contact-container" id="contact">

                <p>Thank you for visiting my portfolio site. Please contact me by using one of the links below.
                I'm always interested in discussing new and exciting collaboration opportunities. I also enjoy connecting
                others, so if I can be of assistance to you in your networking in any way, please feel free to reach out!
                </p>

            </div>

        </Container>

    )
}

export default Home