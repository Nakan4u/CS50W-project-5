import React from 'react';
import LinkIcons from '../components/LinkIcons';

import './styles/Page.css';
import './styles/Home.css';

import portrait from '../images/calum.jpeg';
import { SOCIAL_MEDIA_LINKS } from '../Constants';

function Home() {
  return(
    <main>
      <div className="grid-container">
        <div className="grid-item">
          <h1>Hi, i'm Calum</h1>
          <LinkIcons websites={SOCIAL_MEDIA_LINKS} />
          <p className="large-text">I am a developer, audio engineer, and STEM educator from London.</p> 
        </div>


        <div className="grid-item">
          <img className="portrait" src={portrait} alt="a portrait of Calum"></img>
        </div>
      </div>
    </main>
  );
}

export default Home;