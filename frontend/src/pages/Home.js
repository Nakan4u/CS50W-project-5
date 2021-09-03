import React from 'react';
import './styles/Page.css';
import './styles/Home.css';

import portrait from '../images/calum.jpeg';

import github_icon from '../images/icons/github_icon.svg';
import linkedin_icon from '../images/icons/linkedin_icon.svg';
import twitter_icon from '../images/icons/twitter_icon.svg';
import youtube_icon from '../images/icons/youtube_icon.svg';

function Home() {
  return(
    <main>
      <div className="grid-container">
        <div className="grid-item">
          <h1>Hi, i'm Calum</h1>
          <ul className="icon-list">
              <a href="https://github.com/calumbell" target="_blank" rel="noreferrer">
                <li>
                  <img src={github_icon} alt="link to my GitHub profile"></img>
                  <span className="xl-only">GitHub</span>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/calum-bell/" target="_blank" rel="noreferrer"> 
                <li>
                  <img src={linkedin_icon} alt="link to my LinkedIn profile"></img>
                  <span className="xl-only">LinkedIn</span>
                </li>
              </a>

              <a href="https://twitter.com/caaaaalum" target="_blank" rel="noreferrer">
                <li>
                  <img src={twitter_icon} alt="link to my Twitter profile"></img>
                  <span className="xl-only">Twitter</span>
                </li>
              </a>
              
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <li>
                  <img src={youtube_icon} alt="link to my youtube channel"></img>
                  <span className="xl-only">YouTube</span>
                </li>
              </a>
            </ul>
          <p className="large-text">I am a developer, audio engineer, and STEM educator from London.</p> 
        </div>


        <div className="grid-item">
          <img className="portrait" src={portrait} alt="a portrait of Calum"></img>
        </div>
        <div className="grid-item">

          </div>
      </div>
    </main>
  );
}

export default Home;