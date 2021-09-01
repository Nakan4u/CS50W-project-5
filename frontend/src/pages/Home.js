import React from 'react';
import './styles/Page.css';
import './styles/Home.css';

import portrait from '../images/calum.jpeg';

import github_icon from '../images/icons/github_icon.svg';
import linkedin_icon from '../images/icons/linkedin_icon.svg';
import twitter_icon from '../images/icons/twitter_icon.svg';
function Home() {
  return(
    <main>
      <div className="grid-container">
        <div className="grid-item">
          <h1>Hi, i'm Calum</h1>
          <p className="large-text">I am a developer, audio engineer, and STEM educator from London.</p>
          <ul className="icon-list">
            <li>
              <a href="https://github.com/calumbell" target="_blank" rel="noreferrer">
                <img src={github_icon} alt="link to my GitHub profile"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/calum-bell/" target="_blank" rel="noreferrer"> 
                <img src={linkedin_icon} alt="link to my LinkedIn profile"></img>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/caaaaalum" target="_blank" rel="noreferrer">
                <img src={twitter_icon} alt="link to my Twitter profile"></img>
              </a>
            </li>
          </ul>
  
        </div>


        <div className="grid-item">
          <img src={portrait} alt="a portrait of Calum"></img>
        </div>
        
      </div>
    </main>
  );
}

export default Home;