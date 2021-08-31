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
              <a href="https://github.com/calumbell"><img src={github_icon}></img></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/calum-bell/">
                <img src={linkedin_icon}></img>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/caaaaalum">
                <img src={twitter_icon}></img>
              </a>
            </li>
          </ul>
  
        </div>


        <div className="grid-item">
          <img src={portrait}></img>
        </div>
        
      </div>
    </main>
  );
}

export default Home;