import LinkIcons from './LinkIcons.js';
import './styles/HeroSectionStyles.css';


function HeroSection(props) {
  return(
    <div className="hero-grid-container">
      <div className="grid-item">
        <div>
          <h1>{props.title}</h1>
          <p className="large-text">{props.content}</p> 
        </div>
        <div className="link-icons-in-grid">
          <LinkIcons websites={props.mediaLinks} />
        </div>
      </div>
      <div className="grid-item">
        <img className="portrait" src={props.portraitURL} alt="a portrait of Calum"></img>
      </div>
      <div className="link-icons-out-grid">
        <LinkIcons websites={props.mediaLinks} />
      </div>
    </div>
  );
}

export default HeroSection;