import './index.scss'
import homePic from '../../../assets/images/home-pic.png'

const Pic = () => {
  return(
    <div className="pic-container">
      <img className="solid-pic" src={homePic} alt="Maki" />
    </div>
  )  
};

export default Pic

