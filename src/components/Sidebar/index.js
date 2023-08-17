import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoMaki from '../../assets/images/logo-maki.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);


  return(
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={ LogoMaki } alt="Logo"></img>
      </Link>
      <nav className={showNav ? 'mobile-show': ''}>
        <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> 
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faSuitcase} color="#4d4d4e" /> 
        </NavLink>
        <NavLink onClick={() => setShowNav(false)}  activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> 
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> 
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={ faClose }
          color="rgb(255, 255, 255)"
          size="2x"
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maki-hosokawa-9a7412288/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/makih2003">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={ faBars }
        size="3x"
        className='hamburger-icon' />
    </div>
  );
}


export default Sidebar;