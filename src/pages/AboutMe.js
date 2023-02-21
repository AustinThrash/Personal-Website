import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import "../styles/AboutMe.css";
import about1 from '../img/about1.png';
import aphs from '../img/aphs.png';
import { ChildFriendly, EmojiPeople, School, Pets, Computer } from '@material-ui/icons';

function AboutMe() {
  return (
    <div className="aboutTimeline">
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element"
            date="July 2000"
            iconStyle={{ background: "#F15025", color: "#ffff"}}
            icon={<ChildFriendly/>}
            >
            <h3 className="vertical-timeline-element-title">Born & Raised</h3>
            <img className="aboutImg" src={about1} />
            <p>
                I was born in July, 2000 in Amarillo, Texas. I grew up with my parents and my sister, who is my only sibling
                and a few years older than me. From a young age I have always been interested in how and why things work the way they do,
                I believe this natural curiousity influenced my passion for technology and computer science. While I am a curious person,
                I believe myself to be a creative person aswell. Growing up I spent a lot of time drawing my favorite charaters from cartoons
                and video games I was interested in at the time. Both my interest in computers and my creative skills would develop as I got older.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element"
            date="2015 - 2019"
            iconStyle={{ background: "#D5A021", color: "#ffff"}}
            icon={<EmojiPeople/>}
            >
            <h3 className="vertical-timeline-element-title">Growing on up</h3>
            <p>
                During my high school years, I began to further explore my interest in computers. 
                My school took part in an Texas wide high school art competition known as VASE or the Visual Arts Scholastic Event. 
                This competition peaked my interest and I entered an animation my freshman year. Although my animation scored high, it did not
                move on from regionals. I knew I had to get creative if I wanted to make it to state, so the following year I created a display
                for a new animation I created. This entry would go on to win the highest score at state level. My junior year I refined both my display
                and animation, this improvement lead to me recieving another high score at state. For my final art entry during my senior year, I designed and built an arcade machine
                that allowed viewers to play a game I created. This mix of art and technology lead me to love computer science and all the opportunities it creates.

            </p>
            <p>(Here is a website I made while in high school explaining these projects more: <a href="https://austinty1.wixsite.com/thrashstash/interactive-pieces" target="_blank" rel="noopener noreferrer">My old website</a>)</p>
            
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element"
            date="May 10th, 2019"
            iconStyle={{ background: "#172A3A", color: "#ffff"}}
            icon={<School/>}
            >
            <h2 className="vertical-timeline-element-title">Graduated High School/College</h2>
            <h3><u>River Road High School - Amarillo, TX</u></h3>
            <p>August 2015 - May 2019</p>
            <h3><u>Amarillo College - Amarillo, TX</u></h3>
            <p>Associates in Science, General Study - Dual Degree with Highest Honors</p>
            <p>August 2017 - May 2019</p>
            <p>Cumulative GPA: 3.82</p>
            <p>
                
                During my sophomore year, my high school had started a program that allowed students to take dual enrollment courses with the local college, Amarillo College.
                I was able to join this program and I started taking dual enrollment courses in 2017. I was set up with a course plan that would allow me to graduate high school
                with an associates degree. I continued to work hard over the next two years and eventually on May 10th, 2019, I graduated high school with my associates.
                I graduated in the 10% of my high school class and with highest honors in college.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element"
            date="2019 - 2020"
            iconStyle={{ background: "#F15025", color: "#ffff"}}
            icon={<Pets/>}
            >
            <h2 className="vertical-timeline-element-title">Amarillo Panhandle Humane Society</h2>
            <img className="aphs" src={aphs} />
            <p>
                After graduating high school, I decided to take a gap year before returning back to school. During this time I was working for the
                Amarillo Panhandle Humane Society, I helped them organize and update their adoption database. I also worked as an Adoption Specialist
                and would help people adopt animals from the shelter.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element"
            date="August 2020"
            iconStyle={{ background: "#D5A021", color: "#ffff"}}
            icon={<School/>}
            >
            <h2 className="vertical-timeline-element-title">Started attending University of Texas at San Antonio</h2>

            <p>
                In 2020, my girlfriend and I moved down to San Antonio so I could attend UTSA. I originally started my
                computer science degree with a concentration in cyber security, however after taking more classes and learning
                more about what interests me, I decided to change my concentration to software engineering. I am currently sitting at
                a 3.5 cumulative GPA and was on the Dean's List Spring 2022, and Honor Roll Fall 2020 to Fall 2022.
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element"
            date="August 2023"
            iconStyle={{ background: "#172A3A", color: "#ffff"}}
            icon={<Computer/>}
            >
            <h2 className="vertical-timeline-element-title">Graduation Plans</h2>

            <p>
                I plan on graduating from the University of Texas at San Antonio in August of 2023. I will be graduating with my bachelor's degree
                in Computer Science with a concentration in Software Engineering. 
            </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default AboutMe