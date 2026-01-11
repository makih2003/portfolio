import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <p>
            <span>Software Developer in Test, Co-op @ LMI Technologies</span>
            <br />
            September 2024 - Present
            <br />
            Burnaby, Canada
          </p>
          <p>
            <span>Sales Representative @ MC Net Works Japan Ltd.</span>
            <br />
            May 2016 - August 2018
            <br />
            Hyogo, Japan
          </p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>
            <span>
              Bachelor of Science in Computing Science & Minor in Statistics at{' '}
              <a href="https://www.sfu.ca/">Simon Fraser University</a>
            </span>
            <br />
            CGPA 3.80 / 4.33 & Dean’s Honour Roll - Awarded 3 times (Summer
            2024, Summer 2025, Fall 2025)
            <br /> September 2023 - December 2026 (Expected)
            <br />
            Burnaby, Canada
          </p>
          <p>
            <span className="uni-name">
              Computer Science at{' '}
              <a href="https://langara.ca/">Langara College</a>
            </span>
            <span className="detail">
              <br />
              Completed First Year, Earned 40 Credits
              <br />
              CGPA 4.00 / 4.33 & Dean's Honour Roll (Fall 2022)
            </span>
            <br />
            January 2022 - April 2023
            <br />
            Vancouver, Canada
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
