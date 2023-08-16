import './index.scss'
import homePic from '../../../assets/images/home-pic.png'

const Pic = () => {
  return(
    <div className="pic-container">
      <img className="solid-pic" src={homePic} alt="Maki's Picture" />
    </div>
  )  
};

export default Pic

/**
 * .pic-container {
  z-index: 0;
  width:400px;
  height: 609px;
  position: absolute;
  top:0;
  right: 15%;
  bottom:0;
  left: auto;
  margin: auto;

  .solid-pic {
    
    top: auto;
    right: auto;
    bottom: auto;
    left:0;
    margin: auto;
    width: 100%;
  }
 */