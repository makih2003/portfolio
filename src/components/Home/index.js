import { Link } from 'react-router-dom'
import './index.scss'
import Pic from './Pic'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, I'm <span className="maki">Maki </span></h1>
        <h2>A Computer Science Student at Simon Fraser University</h2>
        <h3>Experienced in JavaScript / Java / C++ / ReactJS / HTML / CSS</h3>
        <Link to="/portfolio" className="flat-button">See My Work</Link>
      </div>
      <Pic />
    </div>
  );
}

export default Home;