import React from "react";
import './index.scss'
import portfolioData from './PortfolioData'

export const Project = ({ image, title, description, link, code, language }) => {
  return (
    <div className="portfolio-item">
      <div className="picture-container">
        <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt={title} className="project-image"/></a>
      </div>
      <div className="project-detail">
        <h3 className="project-title">{title}</h3>
        <p>Made with: <span className="language">{language}</span></p>
        <p className="projet-description">{description}</p>
        <a href={link}><button className="flat-button">Link</button></a>
        <a href={code}><button className="flat-button">Source Code</button></a>
      </div>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div className="container portfolio-page">
      <h1>My Projects</h1>
      <div className="portfolio-list">
      {portfolioData.map((item, index) => (
          <Project
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
            code={item.code}
            language={item.language}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

