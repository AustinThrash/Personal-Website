import React from 'react'
import profilePic from '../img/profilepic.jpeg';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Home.css";


function Home() {
    
  return (
    <div className="home">
        <div className="about" id="fadein">
            <div className="triangle"></div>
                <img className="profile" src={profilePic} />
                    <div className="details">
                        <h2>Hi, my name is Austin Thrash</h2>
                    
                        <p>
                        I'm a Software Engineer with a love for creating and learning new things.
                        </p>
                        <LinkedInIcon/>
                        <GithubIcon/>
                        <EmailIcon/>
                    </div>   
            </div>
        <div className="skills">
            <h2 id="skillsHeader">-   Skills   -</h2>
            <ol className="SkillList">
                <li className="skill" id="list1">
                    <h2>Languages</h2>
                    <ul id="list2">
                        <li>
                            <span>C/C++</span>
                        </li>
                        <li>
                            <span>Python</span>
                        </li>
                        <li>
                            <span>Java</span>
                        </li>
                        <li>
                            <span>JavaScript</span>
                        </li>
                    </ul>
                </li>
                <li className="skill" id="list1">
                    <h2>Front-End & Back-End</h2>
                    <ul id="list2">
                        <li>
                            <span>ReactJS</span>
                        </li>
                        <li>
                            <span>HTML</span>
                        </li>
                        <li>
                            <span>NPM</span>
                        </li>
                        <li>
                            <span>Yarn</span>
                        </li>
                        <li>
                            <span>NodeJS</span>
                        </li>
                        <li>
                            <span>MySQL</span>
                        </li>
                        <li>
                            <span>AWS S3</span>
                        </li>
                        <li>
                            <span>phpMyAdmin</span>
                        </li>
                    </ul>
                </li>
                <li className="skill" id="list1">
                    <h2>Relevant Courses</h2>
                    <ul className="relevant" id="list2">
                        <li>
                            Data Science
                        </li>
                        <li>
                            Software Engineering
                        </li>
                        <li>
                            Computer Organization
                        </li>
                        <li>
                            Computer Networks
                        </li>
                        <li>
                            Computer Architecture
                        </li>
                        <li>
                            Secure Software Development & Analysis
                        </li>
                    </ul>
                    
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home