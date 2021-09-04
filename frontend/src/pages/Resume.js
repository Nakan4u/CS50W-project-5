import React, {useEffect, useState} from 'react';
import { API_HOST } from '../Constants';
import ContentSection from '../components/ContentSection';
import './styles/Page.css';
import './styles/Resume.css';

const headings = ['work', 'education', 'cpd'];

function Resume() {
  const [resume, setResume] = useState({});

  useEffect(() => {
    fetch(`${API_HOST}/resume`)
    .then(res => res.json())
    .then(data => setResume(data))
  }, []);

  return(
    <main>
      <h1>Resume</h1>
      <p>{resume.summary}</p>
      <div>
        { // for each heading present in JSON rspns, generate a content section
          headings.map((heading, index) => {
            return(
              resume[heading] && resume[heading].length > 0 &&
                <ContentSection key={index} title={heading} items={resume[heading]}/>
            )
          })
        }
      </div>
    </main>
  );
}
export default Resume;