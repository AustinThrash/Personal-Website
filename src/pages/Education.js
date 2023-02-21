import React from 'react'
import diploma from '../img/diploma.png';
import utsa from '../img/UTSA-logo.jpeg';
import "../styles/Education.css";


function Education() {
  return (
    <div className="education">
      <h1>-  Education  -</h1>
      <div className="education1" id="fadein">
        <img className="diploma" src={diploma} trans/>
        <div>
        <h1>Amarillo College, TX</h1>
        <h3>- Associates in Science, General Study - Dual Degree with Highest Honors</h3>
        <h4><u>Graduated:</u> May 10th, 2019</h4>
        <h4><u>Cumulative GPA:</u> 3.82</h4>
        <h4><u>Honors:</u> Highest Honors</h4>
        </div>
      </div>
      <hr></hr>
      <div className="education2" id="fadein">
      <img className="utsa" src={utsa} />
        <div>
        <h1>The University of Texas at San Antonio, TX</h1>
        <h3>- Bachelors in Science, Computer Science - Concentration in Software Engineering</h3>
        <h4><u>Expected Graduated:</u> August, 2023</h4>
        <h4><u>Major GPA:</u> 3.5</h4>
        <h4><u>Cumulative GPA:</u> 3.5</h4>
        <h4><u>Dean's List:</u> Spring 2022</h4>
        <h4><u>Honor Roll:</u> Fall 2022 - Fall 2021 - Fall 2020</h4>
        </div>
      </div>
    </div>
  )
}

export default Education