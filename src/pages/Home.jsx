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
                    <img className="profile-img" src="img/profile.jpg" alt="Ryan Garza"/>
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

export default Home