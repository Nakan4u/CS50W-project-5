import React from 'react';
import HeroSection from '../components/HeroSection';
import './styles/Page.css';

import portrait from '../images/calum.jpeg';
import { SOCIAL_MEDIA_LINKS } from '../Constants';

function Home() {

  const profile = {
    title: "Hi, i'm Calum",
    content: "I am a developer, audio engineer, and STEM educator from London",
    mediaLinks: SOCIAL_MEDIA_LINKS,
    portraitURL: portrait,
  }

  return(
    <main>
      <HeroSection {...profile} />
    </main>
  );
}

export default Home;