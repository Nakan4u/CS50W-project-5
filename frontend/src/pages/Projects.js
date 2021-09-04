import React, { useEffect, useState } from 'react';
import { API_HOST } from '../Constants';

import SplitCard from '../components/SplitCard';

function Projects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST}/projects`)
    .then(res => res.json())
    .then(data => setProjects(data))
  }, []);

  return(
    <main>
      <h1>Projects</h1>
      {projects.map((project, index) => {
        return (
        <SplitCard {...project} reverse={(index+1)%2 === 1} key={index} num={index}/>
        )
      })}
      
    </main>
  );
}

export default Projects;