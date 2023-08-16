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
          </p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>
            <span>Computer Science at Langara College
            </span>
            <span className="detail"><br />GPA 4.00 / 4.33 & Dean's Honour Roll</span>
            <br />January 2022 - April 2023
          </p>
          <p>
            <span>Computing Science at Simon Fraser University</span>
            <br /> September 2023 - Present
          </p>
          <p>
            <span>
              Bachelor of Science in Computing Science
            </span>
            <br /> Expected in 2026
          </p>
        </div>
      </div>
    </div>
  )
  
}

export default About