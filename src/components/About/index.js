import './index.scss'

const About = () => {
  return(
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>About Me</h1>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <p>
            <span>Sales Representative | MC Net Works Japan Ltd.</span>
            <br />2016 - 2018
            <br />Hyogo, Japan
          </p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>
            <span className="uni-name">Computer Science at <a href="https://langara.ca/">Langara College</a>
            </span>
            <span className="detail"><br />GPA 4.00 / 4.33 & Dean's Honour Roll</span>
            <br />January 2022 - April 2023
            <br />Vancouver, Canada
          </p>
          <p>
            <span>Computing Science at <a href="https://www.sfu.ca/">Simon Fraser University</a></span>
            <br /> September 2023 - Present
            <br />Burnaby, Canada
          </p>
          <p>
            <span>
              Bachelor of Science in Computing Science
            </span>
            <br /> Expected in 2026
            <br />Burnaby, Canada
          </p>
        </div>
      </div>
    </div>
  )
  
}

export default About